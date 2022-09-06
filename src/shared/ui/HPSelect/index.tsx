import { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  MenuProps
} from "@mui/material";
import { ISelectProps } from "./types";

const HPSelect = (props: ISelectProps): JSX.Element => {
  const {
    name,
    rules,
    size,
    label,
    ellipsis = false,
    options,
    valueProp = "id",
    textProp = "textProp",
    keyProp = "id",
    className,
    inputLabelClassName,
    disabled,
    fullWidth = true,
    defaultValue,
    multiple,
    onChange,
    ...rest
  } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getOptions = useCallback(() => {
    return (
      options &&
      options.map((item) => {
        return (
          <MenuItem
            key={item[keyProp]}
            value={item[valueProp]}
            disabled={item[valueProp] === -1 ? true : false}
          >
            {ellipsis === true ? (
              <span>{item[textProp]}</span>
            ) : (
              <span
                style={{
                  color: item[valueProp] === -1 ? "#aaa" : "#263238",
                  fontWeight: item[valueProp] === -1 ? "350" : "400",
                }}
              >
                {item[textProp]}
              </span>
            )}
          </MenuItem>
        );
      })
    );
  }, [ellipsis, keyProp, options, textProp, valueProp]);

  const renderValue = useCallback(
    (value) => {
      if (typeof value === "object") {
        const res = [];
        value.forEach((item) => {
          options?.forEach((option) => {
            option[keyProp] === item && res.push(option[textProp]);
          });
        });
        return res?.join(",");
      }
      return options?.find((option) => option[keyProp] === value)?.name;
    },
    [keyProp, options, textProp]
  );

  return (
    <FormControl fullWidth={fullWidth} variant="outlined" size={size}>
      <InputLabel htmlFor="select">{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            {...field}
            onChange={(e) => {
              field.onChange(e);
              onChange?.(e);
            }}
            multiple={multiple}
            label={label}
            defaultValue={defaultValue}
            className={className}
            error={!!errors?.[name]?.message}
            autoWidth
            disabled={disabled}
            renderValue={(e) => renderValue(e)}
            name={name}
            fullWidth={fullWidth}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
            }}
            {...rest}
          >
            {getOptions()}
          </Select>
        )}
      />
      {errors?.[`${name}`]?.message && (
        <FormHelperText error>{errors?.[`${name}`]?.message}</FormHelperText>
      )}
    </FormControl>
  );
};

export default HPSelect;
