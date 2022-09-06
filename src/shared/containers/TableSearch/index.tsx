import { Fragment, useCallback } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Box, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HPInput from "shared/ui/HPInput";
import useQueryParams, { IQueryObject } from "helpers/useQueryParams";
import { debounce } from "src/helpers";
import { IFetchDataReturn } from "helpers/useTable/useTable";

const TableSearch = ({
  name,
  fetchData,
  placeholder = "",
  width = 400,
  clearButton = true,
}: {
  fetchData: (additionalQueries?: IQueryObject) => IFetchDataReturn;
  name: string;
  placeholder?: string;
  width?: number;
  clearButton?: boolean;
}) => {
  const { getQueries, setQueries } = useQueryParams();
  const methods = useForm({
    defaultValues: {
      [name]: getQueries()[name] || "",
    },
  });

  const searchTextWatch = useWatch({
    control: methods.control,
    name: name,
  });

  const isResetDisabled = useCallback(() => {
    const queries = getQueries();
    return !queries[name] || !searchTextWatch;
  }, [getQueries]);

  const resetSearch = () => {
    setQueries({
      ...getQueries(),
      [name]: "",
    });
    methods.reset({ [name]: "" });
    fetchData();
  };

  const handleSearch = (value: string) => {
    setQueries({
      ...getQueries(),
      page: 1,
      [name]: value,
    });
    fetchData();
  };

  const debounceSearch = useCallback(
    debounce((nextValue: string) => handleSearch(nextValue), 400),
    []
  );

  return (
    <Fragment>
      <Box
        width={width}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <FormProvider {...methods}>
          <HPInput
            size="small"
            name={name}
            variant="outlined"
            placeholder={placeholder}
            onChange={debounceSearch}
            startAdornment={
              <InputAdornment position="start">
                <Box
                  pr={1}
                  display="flex"
                  alignItems="center"
                  borderRight="1px solid black"
                >
                  <SearchIcon />
                </Box>
              </InputAdornment>
            }
          />
        </FormProvider>
        {clearButton && (
          <Box ml={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={resetSearch}
              disabled={isResetDisabled()}
            >
              Clear
            </Button>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default TableSearch;
