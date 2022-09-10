import Table from "../../../../shared/ui/Table";
import React, { useMemo, useState } from "react";
import useTable from "../../../../helpers/useTable/useTable";
import {
  deleteProduct,
  fetchProductsGrid,
  getProducts,
} from "../../../../store/slicers/products";
import defaultColumns from "./data/columns";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { IActionsDropdownListItem } from "../../../../shared/ui/Table/components/actionsDropdown";
import { IProduct } from "../../../../store/models/products.interface";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "../../../../shared/containers/ConfirmDialog";
import { AppDispatch } from "../../../../store";
import { ERequestStatus } from "../../../../store/config/constants";
import toast from "react-hot-toast";
import Filters from "./components/Filters";
import { useStyles } from "./styles";
import DataMissingChip from "../../../../shared/ui/DataMissingChip";

interface IConfirmDialogDefaultValues {
  open: boolean;
  loading: boolean;
  data: {
    id: null | number;
  };
}

const confirmModalDefaultValues: IConfirmDialogDefaultValues = {
  open: false,
  loading: false,
  data: {
    id: null,
  },
};

const Products = (): JSX.Element => {
  const { pagination, loading, handleColumnFilter, fetchData } = useTable({
    action: fetchProductsGrid,
  });

  const [confirmModal, setConfirmModal] = useState(confirmModalDefaultValues);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const productsData = useSelector(getProducts);

  const columns = useMemo(() => {
    return [
      ...defaultColumns,
      {
        title: "Image",
        layout: (row: IProduct) => (
          <Box
            className={classes.image}
            style={{ backgroundImage: `url('${row.images[0]}')` }}
          />
        ),
      },
      {
        title: "Categories",
        layout: (row: IProduct) =>
          row.categories.length > 0 ? (
            <React.Fragment>
              {row.categories.map((item: string, index: number) => (
                <Typography variant="subtitle2" key={index}>
                  {item}
                </Typography>
              ))}
            </React.Fragment>
          ) : (
            <DataMissingChip />
          ),
      },
    ];
  }, []);

  const handleModalOpen = (row: IProduct) => {
    setConfirmModal({
      ...confirmModal,
      open: true,
      data: {
        id: row.id,
      },
    });
  };

  const handleConfirmClose = () => {
    setConfirmModal({
      ...confirmModal,
      open: false,
    });
  };

  const handleConfirmAgree = async () => {
    setBtnLoading(true);
    if (confirmModal.data.id) {
      const productId = confirmModal.data.id.toString();
      const { meta } = await dispatch(deleteProduct(productId));
      if (meta.requestStatus !== ERequestStatus.FULFILLED) {
        toast.error("Something went wrong");
        setBtnLoading(false);
        return;
      }
      toast.success("Successfully Deleted");
      setBtnLoading(false);
      fetchData();
      handleConfirmClose();
    }
  };

  const dropdownActions: IActionsDropdownListItem<IProduct>[] = useMemo(
    () => [
      {
        text: "Edit",
        icon: <EditIcon />,
        action: (row: IProduct) => {
          navigate(`/admin/edit-product/${row.id}`);
        },
      },
      {
        text: "Delete",
        icon: <DeleteIcon />,
        action: (row: IProduct) => {
          handleModalOpen(row);
        },
      },
    ],
    []
  );

  const goToAddProduct = () => {
    navigate("/admin/add-product");
  };

  const actions = useMemo(
    () => [
      {
        layout: () => (
          <Button variant="outlined" onClick={goToAddProduct}>
            Add Product
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Table
        title="Products"
        isLoading={loading}
        rows={productsData?.results || []}
        columns={columns}
        paginationConfig={pagination}
        onColumnFilter={handleColumnFilter}
        dropdownActions={dropdownActions}
        actions={actions}
        filters={<Filters fetchData={fetchData} />}
        showFirstButton
        showLastButton
      />
      <ConfirmDialog
        title={`Product`}
        isOpen={confirmModal.open}
        isLoading={btnLoading as boolean}
        onAgree={handleConfirmAgree}
        onClose={handleConfirmClose}
      >
        <p>Are you sure you want to delete this product?</p>
      </ConfirmDialog>
    </React.Fragment>
  );
};

export default Products;
