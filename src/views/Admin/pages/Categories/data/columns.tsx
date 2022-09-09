import { toLocalDate } from "../../../../../helpers";
import DataMissingChip from "../../../../../shared/ui/DataMissingChip";
import { ICategory } from "../../../../../store/models/categories.interface";

const defaultColumns = [
  {
    field: "name",
    title: "Category name",
  },
  {
    field: "created_at",
    title: "Created At",
    layout(row: ICategory): string | JSX.Element {
      return row.created_at ? toLocalDate(row.created_at) : <DataMissingChip />;
    },
  },
  {
    field: "updated_at",
    title: "Updated At",
    layout(row: ICategory): string | JSX.Element {
      return row.created_at ? toLocalDate(row.created_at) : <DataMissingChip />;
    },
  },
];

export default defaultColumns;