import { Controller, useFormContext } from "react-hook-form";
import moment from "moment";
import { Box, FormHelperText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { IDatePickerProps } from "./types";
import theme from "src/theme";

const format = "YYYY-MM-DD";

const styles = makeStyles({
  error: {
    borderColor: `${theme.palette.secondary.main} !important`,
    boxShadow: "0 0 0 2px rgb(255 24 56 / 20%)",
  },
  root: {
    "& .ant-picker": {
      width: "100%",
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

const HpDatePicker = (props: IDatePickerProps) => {
  const { name, rules, onChange, customFormat, label, disabledDate } = props;
  const classes = styles();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box className={classes.root}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }: any) => (
          <DatePicker
            {...field}
            disabledDate={disabledDate}
            className={`${errors[name] ? classes.error : ""}`}
            value={field.value ? moment(field.value) : ""}
            placeholder={label}
            onChange={(value) => {
              field.onChange(
                value?.format(customFormat ? customFormat : format)
              );
              onChange?.(value?.format(customFormat ? customFormat : format));
            }}
            size="large"
          />
        )}
      />
      {errors?.[`${name}`]?.message && (
        <Box ml={2} mt={0.5}>
          <FormHelperText error>{errors?.[`${name}`]?.message}</FormHelperText>
        </Box>
      )}
    </Box>
  );
};

export default HpDatePicker;
