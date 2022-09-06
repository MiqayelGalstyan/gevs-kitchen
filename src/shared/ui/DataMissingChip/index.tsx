import { Chip } from "@mui/material";

interface IDataMisingProps {
  style?: object;
}

const DataMissingChip = ({ style }: IDataMisingProps): JSX.Element => {
  return <Chip label="No data" style={style} size="small" color="info" />;
};

export default DataMissingChip;
