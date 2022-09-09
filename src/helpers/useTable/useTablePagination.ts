import { useState } from "react";
import useQueryParams, { IQueryObject } from "../../helpers/useQueryParams";

interface IUseTablePaginationProps {
  defaultQueries: IQueryObject;
  fetchData: (queries?: IQueryObject) => void;
}

interface IPagination {
  onChangePage: (_: any, value: number) => void;
  page?: number | string;
  rowsPerPage?: number | string;
  totalCount?: number | string;
}

const useTablePagination = ({
  defaultQueries,
  fetchData,
}: IUseTablePaginationProps) => {
  const { getQueries, setQueries } = useQueryParams();

  const paginate = (_: any, value: number) => {
    const queries = { ...defaultQueries, ...getQueries() };
    for (let query in queries) {
      if (!queries[query]) {
        delete queries[query];
      }
    }

    queries.page =
      value != queries.page && value > queries.page
        ? Number(value)
        : value != queries.page && value < queries.page
        ? Number(value)
        : value >= queries.page
        ? Number(queries.page) + 1
        : Number(queries.page) - 1;
    fetchData(queries);
    setQueries(queries);
  };
  const [pagination, setPagination] = useState<IPagination>({
    onChangePage: paginate,
  });

  return { pagination, setPagination };
};

export default useTablePagination;
