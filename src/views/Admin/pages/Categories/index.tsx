import Table from "../../../../shared/ui/Table";
import React, { useMemo } from "react";
import useTable from "../../../../helpers/useTable/useTable";
import {
  fetchCategoriesGrid,
  getCategories,
} from "../../../../store/slicers/categories";
import defaultColumns from "./data/columns";
import { useSelector } from "react-redux";

const Categories = (): JSX.Element => {
  const { pagination, loading, handleColumnFilter, fetchData } = useTable({
    action: fetchCategoriesGrid,
  });

  const categoriesData = useSelector(getCategories);

  const columns = useMemo(() => {
    return [...defaultColumns];
  }, []);

  return (
    <React.Fragment>
      <Table
        title="Categories"
        isLoading={loading}
        rows={categoriesData?.results || []}
        columns={columns}
        paginationConfig={pagination}
        onColumnFilter={handleColumnFilter}
        // dropdownActions={dropdownActions}
        // actions={actions}
        // filters={<Filters fetchData={fetchData} />}
        showFirstButton
        showLastButton
      />
    </React.Fragment>
  );
};

export default Categories;
