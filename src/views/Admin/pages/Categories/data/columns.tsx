import { toLocalDate } from "../../../../../helpers";
import DataMissingChip from "../../../../../shared/ui/DataMissingChip";
import { ICategory } from "../../../../../store/models/categories.interface";

const defaultColumns = [
  {
    field: "name",
    title: "Category Name",
  },
  {
    field: "creationDate",
    title: "Creation Date",
    layout(row: ICategory): string | JSX.Element {
      return row.creationDate ? toLocalDate(row.creationDate) : <DataMissingChip />;
    },
  },
];

export default defaultColumns;