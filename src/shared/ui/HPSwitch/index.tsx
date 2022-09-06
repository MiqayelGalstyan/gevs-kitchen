import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { IHPSwitchProps } from "./types";

const HPSwitch = forwardRef((props: IHPSwitchProps, ref) => {
  const { label, rules, name, onChangeCb } = props;

  const { control } = useFormContext();

  return (
    <Box>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <FormControlLabel
              control={
                <Switch
                  {...field}
                  checked={field.value}
                  color="primary"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    field.onChange(event.target.checked);
                    onChangeCb?.(event.target.checked);
                  }}
                />
              }
              label={label}
            />
          );
        }}
      />
    </Box>
  );
});

export default HPSwitch;
