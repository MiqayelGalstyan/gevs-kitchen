import { Fragment } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@mui/material";
import { IHPCheckBoxProps } from "./types";

const HPCheckBox = (props: IHPCheckBoxProps) => {
  const { name, rules, color = "primary", onClick, onChange, disabled } = props;

  const { control } = useFormContext();

  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            {...field}
            color={color}
            onClick={onClick}
            onChange={(e, value) => {
              onChange?.(value);
              field.onChange(value);
            }}
            disabled={disabled}
          />
        )}
      />
    </Fragment>
  );
};

export default HPCheckBox;
