import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { useLocation, useNavigate, useParams } from "react-router";
import { useCallback } from "react";
import {
  addProduct,
  getProductById,
  updateProduct,
} from "../../../../../store/slicers/products";
import { ERequestStatus } from "../../../../../store/config/constants";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Button,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import HPInput from "../../../../../shared/ui/HPInput";
import {
  dataUrlToFile,
  toBase64,
  latinAlphabeticalAndNumericalHandler,
} from "../../../../../helpers";
import HPLoadingButton from "../../../../../shared/ui/HPLoadingButton";
import { useState } from "react";
import toast from "react-hot-toast";
import HpNumberInput from "../../../../../shared/ui/HpNumberInput";
import ClearIcon from "@mui/icons-material/Clear";
import { useStyles } from "../styles";
import HPAutocomplete from "../../../../../shared/ui/HPAutocomplete";
import HPSwitch from "../../../../../shared/ui/HPSwitch";
import { ICategory } from "../../../../../store/models/categories.interface";
import { fetchCategoriesGrid } from "../../../../../store/slicers/categories";

const requiredFields = {
  required: {
    value: true,
    message: "Required field",
  },
};

interface IFormData {
  name: string;
  images: any[];
  categoryIds: any[];
  description: string;
  price: number;
  isTop: boolean;
}

const MAX_FILE_SIZE = 2;

const AddEditProduct = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [previewImagesList, setPreviewImagesList] = useState<Array<any>>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [categoriesList, setCategoriesList] = useState<Array<any>>([]);

  const classes = useStyles();

  const navigate = useNavigate();

  const fileInputRef = useRef<any>();

  const methods = useForm<IFormData>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      categoryIds: [],
      images: [],
      isTop: false,
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    clearErrors,
  } = methods;

  const watchCategoriesList = methods.watch("categoryIds");

  const fetchDetails = useCallback(async () => {
    if (id) {
      const { meta, payload }: any = await dispatch(getProductById(Number(id)));
      if (meta.requestStatus !== ERequestStatus.FULFILLED) {
        return;
      }
      if (payload) {
        reset({
          ...payload,
          categoryIds:
            payload.categories?.length > 0
              ? payload.categories.map((item: ICategory) => item)
              : [],
        });
        let images: any = [];
        if (payload?.images?.length > 0) {
          for (let i = 0; i < payload.images.length; i++) {
            let file: any = payload.images[i];
            images.push(file);
          }
          setPreviewImagesList(images);
        }
      }
    }
  }, [dispatch, id, reset]);

  const fetchCategories = useCallback(async () => {
    setLoaded(true);
    const { meta, payload }: any = await dispatch(
      fetchCategoriesGrid(`page=1&pageSize=2000`)
    );
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setLoaded(false);
      return;
    }
    setLoaded(false);
    setCategoriesList(payload.results);
  }, [dispatch]);

  useEffect(() => {
    fetchDetails();
    fetchCategories();
  }, [fetchDetails, fetchCategories]);

  const onSubmit = async (formData: IFormData) => {
    setBtnLoading(true);

    const data = {
      ...formData,
      price: Number(formData.price),
      categoryIds: formData.categoryIds.map((item: ICategory) => item.id),
      ...(id ? { id: id } : {}),
    };

    const action = id ? updateProduct : addProduct;
    const { meta }: any = await dispatch(action({ data: { ...data } }));
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setBtnLoading(false);
      toast.error("Something went wrong");
      return;
    }
    const successMessage = location.pathname.includes("/edit")
      ? "Successfully Updated"
      : "Successfully Added";
    toast.success(successMessage);
    navigate("/admin/products");
    setBtnLoading(false);
  };

  const handleFileChange = async (e: any) => {
    let createdImagesList: any = [];
    let base64ImageList: any = [];
    let imageFileList: any = [];

    let images: any = [];

    for (let i = 0; i < e.target.files.length; i++) {
      const size = (e.target.files[i].size / 1024 / 1024).toFixed(2);
      const currentFile = e.target.files[i];
      if (Number(size) > MAX_FILE_SIZE) {
        toast.error("File size greather than 2MB");
        return;
      }

      const imageData: any = URL.createObjectURL(currentFile);
      createdImagesList.push(imageData);
    }

    const prevImage = await Promise.all(createdImagesList);

    for (let i = 0; i < e.target.files.length; i++) {
      const size = (e.target.files[i].size / 1024 / 1024).toFixed(2);
      const currentFile = e.target.files[i];
      if (Number(size) > MAX_FILE_SIZE) {
        toast.error("File size greather than 2MB");
        return;
      }

      const imageData = URL.createObjectURL(currentFile);

      images.push(imageData);
      const dateURLFile = await dataUrlToFile(prevImage[i], currentFile?.name);

      let file = await toBase64(currentFile);

      imageFileList.push(dateURLFile);

      base64ImageList.push(file);
    }

    if (images.length <= 3 && previewImagesList.length + images.length <= 3) {
      setPreviewImagesList([...previewImagesList, ...images]);
      setValue("images", [...methods.watch("images"), ...base64ImageList]);
      clearErrors(["images"]);
    } else {
      toast.error("Maximum images count 3");
    }
  };

  const triggerFileUpload = () => {
    fileInputRef?.current?.click();
  };

  const removePreviewImage = (index: number) => {
    setPreviewImagesList(
      previewImagesList.filter((_, idx: number) => idx !== index)
    );
    setValue(
      "images",
      methods.watch("images")?.filter((_, idx: number) => idx !== index)
    );
  };

  const categoryOptionsDisabled = useCallback(
    (option) => {
      const selectedItem: ICategory | undefined = watchCategoriesList.find(
        (item) => item.id === option.id
      );
      return !!selectedItem;
    },
    [watchCategoriesList]
  );

  if (loaded) {
    return (
      <Box
        component={Paper}
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={2} component={Paper} marginBottom={2}>
      <FormProvider {...methods}>
        <Typography variant="h1">
          {location.pathname.includes("/edit")
            ? "Update Product"
            : "Add Product"}
        </Typography>
        <Box py={1} marginTop={4}>
          <HPInput
            label="Product Name"
            name="name"
            onKeyPress={latinAlphabeticalAndNumericalHandler}
            rules={{
              ...requiredFields,
            }}
            InputProps={{
              inputProps: {
                maxLength: 200,
              },
            }}
          />
          <Box fontSize="11px" color="#768192">
            Product name
          </Box>
        </Box>
        <Box py={1}>
          <HPInput
            label="Product Description"
            name="description"
            multiline
            maxRows={5}
            onKeyPress={latinAlphabeticalAndNumericalHandler}
            rules={{
              ...requiredFields,
            }}
            InputProps={{
              inputProps: {
                maxLength: 1000,
              },
            }}
          />
          <Box fontSize="11px" color="#768192">
            Product Description
          </Box>
        </Box>
        <Box py={1}>
          <HPAutocomplete
            label="Categories"
            name="categoryIds"
            multiple
            maxItems={5}
            getOptionDisabled={(option: ICategory) =>
              categoryOptionsDisabled(option)
            }
            options={categoriesList || []}
            onRenderOption={(option: ICategory) => {
              return <li>{option.name}</li>;
            }}
          />
          <Box fontSize="11px" color="#768192">
            You can choose category for product
          </Box>
        </Box>
        <Box py={1}>
          <HPSwitch name="isTop" label="Top Product" />
        </Box>
        <Box py={1}>
          <HpNumberInput
            label="Product Price"
            name="price"
            rules={{
              ...requiredFields,
            }}
          />
          <Box fontSize="11px" color="#768192">
            Product Price
          </Box>
        </Box>
        <Box className={classes.imageArea} py={1}>
          <Button variant="contained" onClick={triggerFileUpload}>
            Upload Image
          </Button>
          <Box display="flex" marginTop={2}>
            {previewImagesList?.length > 0 &&
              previewImagesList.map((item: any, index: number) => (
                <Box key={index} className={classes.previewImgItem}>
                  <Box>
                    <img
                      src={item}
                      alt="logo"
                      className={classes.base64Image}
                    />
                  </Box>
                  <Box
                    className={classes.deleteBtn}
                    onClick={() => removePreviewImage(index)}
                  >
                    <ClearIcon className={classes.icon} fontSize="small" />
                  </Box>
                </Box>
              ))}
          </Box>
          <Box display="none">
            <input
              type="file"
              {...register("images", {
                required: {
                  value: true,
                  message: "Required field,please upload image",
                },
              })}
              key={Date.now()}
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </Box>
          {errors?.images?.message ? (
            <Box margin="4px 14px">
              <FormHelperText error>{errors?.images?.message}</FormHelperText>
            </Box>
          ) : null}
        </Box>
      </FormProvider>
      <Box py={2}>
        <Divider />
      </Box>
      <HPLoadingButton
        isLoading={btnLoading}
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        {location.pathname.includes("/edit") ? "Save" : "Create"}
      </HPLoadingButton>
    </Box>
  );
};

export default AddEditProduct;
