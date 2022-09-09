import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IThunkOptions } from "../../store/config/thunkOptions";
import useQueryParams, { IQueryObject } from "../../helpers/useQueryParams";
import useTablePagination from "../../helpers/useTable/useTablePagination";
import { IUseTableConfig } from "../../helpers/useTable/types";
import { ESortDirection } from "../../shared/ui/Table/enums";

export enum ESystemQueries {
  page = "page",
  pageCount = "pageCount",
  sort_by = "sort_by",
  sort_type = "sort_type",
}

export const defaultQueries: IQueryObject = {
  [ESystemQueries.page]: 1,
  [ESystemQueries.pageCount]: 16,
  [ESystemQueries.sort_type]: ESortDirection.ascending,
  [ESystemQueries.sort_by]: "",
};

const useTable = <Returned, ThunkArg>(
  config: IUseTableConfig<Returned, ThunkArg, IThunkOptions>
) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { setQueries, getQueries } = useQueryParams();

  const fetchData = useCallback(
    async (additionalQueries: IQueryObject = {}) => {
      const queries = getQueries();
      setLoading(true);
      let actionPayload: any = {
        ...queries,
        page: queries["page"] ? queries["page"] : defaultQueries.page,
        ...additionalQueries,
      };

      if (!config.requestType || config.requestType === "queryString") {
        actionPayload = new URLSearchParams(actionPayload).toString();
      }

      if (config.actionParam) {
        actionPayload = {
          [config.actionParam.key]: config.actionParam.value,
          [config.requestType || "queryString"]: actionPayload,
        };
      }

      const { meta, payload }: any = await dispatch(
        config.action(actionPayload) as any
      );

      if (meta.requestStatus !== "fulfilled") {
        setLoading(false);
        return;
      }

      setLoading(false);
      if (payload.meta) {
        setPagination({
          ...pagination,
          page: Number(payload.meta.currentPage),
          rowsPerPage: Number(payload.meta.itemsPerPage),
          totalCount: Number(payload.meta.totalItems),
        });
      }
      return { meta, payload };
    },
    [dispatch, config.action]
  );

  const { pagination, setPagination } = useTablePagination({
    defaultQueries: { page: defaultQueries.page },
    fetchData,
  });

  const getSeparatedFilters = () => {
    const queries: IQueryObject = { ...getQueries() };
    const filterQueries: IQueryObject = {};
    const systemQueries: IQueryObject = {};

    Object.keys(queries).forEach((query) => {
      if (Object.keys(defaultQueries).includes(query as ESystemQueries)) {
        systemQueries[query] = queries[query];
        return;
      }
      if (typeof queries[query] !== "string") {
        const queryArr = queries[query] as string[];
        filterQueries[query] = queryArr[0];
        return;
      }
      filterQueries[query] = queries[query];
    });

    return {
      filterQueries,
      systemQueries,
    };
  };

  const handleColumnFilter = async (column: string) => {
    const { systemQueries, filterQueries } = getSeparatedFilters();

    const extendedQueries = {
      ...systemQueries,
      ...defaultQueries,
      ...filterQueries,
      sort_by:
        systemQueries.sort_type === ESortDirection.descending ? "" : column,
      sort_type:
        systemQueries.sort_type === ESortDirection.ascending
          ? ESortDirection.descending
          : systemQueries.sort_type === ESortDirection.descending
            ? ""
            : ESortDirection.ascending,
    };

    const { meta }: any = await fetchData(extendedQueries);
    if (meta.requestStatus !== "fulfilled") {
      return;
    }
    setQueries(extendedQueries);
  };

  const initialFetch = useCallback(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!config?.noInitialFetch) {
      initialFetch();
    }
  }, []);

  return {
    pagination,
    loading,
    setLoading,
    fetchData,
    handleColumnFilter,
  };
};

export type IFetchDataReturn = Promise<
  | {
    meta: any;
    payload: any;
  }
  | undefined
>;
export default useTable;
