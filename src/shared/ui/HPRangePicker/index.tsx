import { Controller, useFormContext } from "react-hook-form";
import moment from "moment";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { IRangePickerProps } from "./types";

const format = "YYYY-MM-DD";
const ranges = {
  "Last week": [moment().subtract(6, "days"), moment()],
  "Last month": [moment().subtract(30, "days"), moment()],
  "Last half-year": [moment().subtract(183, "days"), moment()],
  "Last year": [moment().subtract(365, "days"), moment()],
};
const styles = makeStyles({
  root: {
    "& .ant-picker": {
      width: "235px",
      border: "1px solid #c4c4c4",
      borderRadius: "4px",
    },
    "& .ant-picker-input > input": {
      "&::placeholder": {
        color: "#546e7a",
      },
    },
  },
});

const HPRangePicker = (props: IRangePickerProps) => {
  const { name, rules, onChange, customFormat } = props;
  const classes = styles();

  const { control } = useFormContext();

  return (
    <Box className={classes.root}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }: any) => (
          <DatePicker.RangePicker
            value={[
              field.value?.startDate ? moment(field.value.startDate) : "",
              field.value?.endDate ? moment(field.value.endDate) : "",
            ] as any}
            placeholder={["Start", "End"]}
            onChange={(value) => {
              const parsedValue = {
                startDate: value?.[0] ? value[0].format(customFormat ? customFormat : format) : "",
                endDate: value?.[1] ? value[1].format(customFormat ? customFormat : format) : "",
              };
              field.onChange(parsedValue);
              onChange?.(parsedValue);
            }}
            size="large"
            allowEmpty={[false, false]}
            ranges={ranges as any}
          />
        )}
      />
    </Box>
  );
};

export default HPRangePicker;
