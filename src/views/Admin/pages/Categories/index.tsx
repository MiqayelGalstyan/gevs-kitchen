/* eslint-disable react-hooks/exhaustive-deps */
import Table from "../../../../shared/ui/Table";
import React, { useMemo, useState } from "react";
import useTable from "../../../../helpers/useTable/useTable";
import {
  deleteCategory,
  fetchCategoriesGrid,
  getCategories,
} from "../../../../store/slicers/categories";
import defaultColumns from "./data/columns";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { IActionsDropdownListItem } from "../../../../shared/ui/Table/components/actionsDropdown";
import { ICategory } from "../../../../store/models/categories.interface";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "../../../../shared/containers/ConfirmDialog";
import { AppDispatch } from "../../../../store";
import { ERequestStatus } from "../../../../store/config/constants";
import toast from "react-hot-toast";
import Filters from "./components/Filters";

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

const Categories = (): JSX.Element => {
  const { pagination, loading, handleColumnFilter, fetchData } = useTable({
    action: fetchCategoriesGrid,
  });

  const [confirmModal, setConfirmModal] = useState(confirmModalDefaultValues);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const categoriesData = useSelector(getCategories);

  const columns = useMemo(() => {
    return [...defaultColumns];
  }, []);

  const handleModalOpen = (row: ICategory) => {
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
      const categoryId = confirmModal.data.id.toString();
      const { meta } = await dispatch(deleteCategory(categoryId));
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

  const dropdownActions: IActionsDropdownListItem<ICategory>[] = useMemo(
    () => [
      {
        text: "Edit",
        icon: <EditIcon />,
        action: (row: ICategory) => {
          navigate(`/admin/edit-category/${row.id}`);
        },
      },
      {
        text: "Delete",
        icon: <DeleteIcon />,
        action: (row: ICategory) => {
          handleModalOpen(row);
        },
      },
    ],
    []
  );

  const goToAddCategory = () => {
    navigate("/admin/add-category");
  };

  const actions = useMemo(
    () => [
      {
        layout: () => (
          <Button variant="outlined" onClick={goToAddCategory}>
            Add Category
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Table
        title="Categories"
        isLoading={loading}
        rows={categoriesData?.results || []}
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
        title={`Category`}
        isOpen={confirmModal.open}
        isLoading={btnLoading as boolean}
        onAgree={handleConfirmAgree}
        onClose={handleConfirmClose}
      >
        <p>Are you sure you want to delete this category?</p>
      </ConfirmDialog>
    </React.Fragment>
  );
};

export default Categories;
