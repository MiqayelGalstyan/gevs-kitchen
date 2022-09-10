import { Box } from "@mui/material";
import DataMissingChip from "../../../../../shared/ui/DataMissingChip";
import { IProduct } from "../../../../../store/models/products.interface";

const defaultColumns = [
  {
    field: "name",
    title: "Product Name",
  },
  {
    field: "price",
    title: "Price",
  },
  {
    field: "",
    title: "Description",
    layout(row: IProduct): string | JSX.Element {
      return row.description ? (
        <Box>
          {row.description}
        </Box>
      ) : (
        <DataMissingChip />
      );
    },
  },
];

export default defaultColumns;