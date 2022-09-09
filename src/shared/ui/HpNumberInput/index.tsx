import { ChangeEvent, forwardRef, Fragment } from "react";
import NumberFormat from "react-number-format";
import { Controller, useFormContext } from "react-hook-form";
import { TextField, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const onlyNumbers = (val: number) => val;

export interface IIsAllowedProps {
  floatValue: number;
  formattedValue: string;
  value: string;
}

interface IHpNumberInput {
  disabled?: boolean;
  isDecimal?: boolean;
  asterisk?: boolean;
  label?: string;
  name: string;
  rules?: any;
  customError?: null | string;
  inputProps?: any;
  allowLeadingZeros?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isAllowed?: (value: IIsAllowedProps) => boolean;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
}

const styles = makeStyles({
  input: {
    width: "100%",
  },
});

const HpNumberInput = forwardRef(
  (
    {
      disabled = false,
      isDecimal = false,
      asterisk = false,
      isAllowed,
      customError = null,
      allowLeadingZeros = false,
      label = "",
      name,
      rules = {},
      inputProps = {},
      onChange,
      startAdornment,
      endAdornment,
    }: IHpNumberInput,
    ref
  ) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    const classes = styles();

    return (
      <Fragment>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <NumberFormat
              InputProps={{
                ...(startAdornment ? { startAdornment } : {}),
                ...(endAdornment ? { endAdornment } : {}),
              }}
              className={classes.input}
              {...(isAllowed ? { isAllowed: isAllowed } : {})}
              allowLeadingZeros={allowLeadingZeros}
              inputRef={ref}
              label={asterisk ? label + " *" : label}
              autoComplete={"new-password"}
              customInput={TextField}
              variant="outlined"
              {...(isDecimal ? {} : {})}
              format={!isDecimal ? onlyNumbers : undefined as any}
              helperText={
                !disabled &&
                ((customError ? customError : errors[name]?.message) as any)
              }
              error={
                !disabled && (customError ? !!customError : !!errors?.[name])
              }
              {...field}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                field.onChange(e.target?.value);
                onChange?.(e);
              }}
              value={field.value || ""}
              inputProps={inputProps}
            />
          )}
        />
      </Fragment>
    );
  }
);

export default HpNumberInput;
