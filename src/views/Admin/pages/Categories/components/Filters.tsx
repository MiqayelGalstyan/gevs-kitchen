import { Box, Divider, Paper } from "@mui/material";
import TableSearch from "../../../../../shared/containers/TableSearch";
import { IFetchDataReturn } from "../../../../../helpers/useTable/useTable";
import { IQueryObject } from "../../../../../helpers/useQueryParams";

const Filters = ({
  fetchData,
}: {
  fetchData: (additionalQueries?: IQueryObject) => IFetchDataReturn;
}): JSX.Element => {
  return (
    <Box width="100%" p={2} component={Paper}>
      <Box mb={1} mr={2}>
        <TableSearch
          clearButton={false}
          width={200}
          placeholder="Category Name"
          name="name"
          fetchData={fetchData}
        />
      </Box>
      <Box my={2}>
        <Divider />
      </Box>
    </Box>
  );
};

export default Filters;
