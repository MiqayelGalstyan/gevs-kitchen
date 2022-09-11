import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { useLocation, useNavigate, useParams } from "react-router";
import { useCallback } from "react";
import {
  addCategory,
  getCategoryById,
  updateCategory,
} from "../../../../../store/slicers/categories";
import { ERequestStatus } from "../../../../../store/config/constants";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Paper, Typography, Divider } from "@mui/material";
import HPInput from "../../../../../shared/ui/HPInput";
import { latinAlphabeticalAndNumericalHandler } from "../../../../../helpers";
import HPLoadingButton from "../../../../../shared/ui/HPLoadingButton";
import { useState } from "react";
import toast from "react-hot-toast";

const requiredFields = {
  required: {
    value: true,
    message: "Required field",
  },
};

const AddEditCategory = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      name: "",
    },
  });

  const { reset, handleSubmit } = methods;

  const fetchDetails = useCallback(async () => {
    if (id) {
      const { meta, payload }: any = await dispatch(
        getCategoryById(Number(id))
      );
      if (meta.requestStatus !== ERequestStatus.FULFILLED) {
        return;
      }
      if (payload) {
        reset(payload);
      }
    }
  }, [dispatch, id, reset]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const onSubmit = async (formData: any) => {
    setBtnLoading(true);
    const action = id ? updateCategory : addCategory;
    const { meta } = await dispatch(action({ data: { ...formData, id: id } }));
    if (meta.requestStatus !== ERequestStatus.FULFILLED) {
      setBtnLoading(false);
      toast.error("Something went wrong");
      return;
    }
    const successMessage = location.pathname.includes("/edit")
      ? "Successfully Updated"
      : "Successfully Added";
    toast.success(successMessage);
    navigate("/admin/categories");
    setBtnLoading(false);
  };

  return (
    <Box p={2} component={Paper} marginBottom={2}>
      <FormProvider {...methods}>
        <Typography variant="h1">
          {location.pathname.includes("/edit")
            ? "Update Category"
            : "Add Category"}
        </Typography>
        <Box py={1}>
          <HPInput
            label="Category Name"
            name="name"
            onKeyPress={latinAlphabeticalAndNumericalHandler}
            rules={{
              ...requiredFields,
            }}
          />
          <Box fontSize="11px" color="#768192">
            Category name
          </Box>
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

export default AddEditCategory;
