import { Fragment, useMemo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IInputProps } from "./types";

const HPInput = ({
  multiline,
  size,
  className,
  name,
  label = "",
  variant = "outlined",
  placeholder = "",
  type,
  margin = "none",
  InputProps,
  startAdornment,
  rules,
  onKeyPress,
  inputRef,
  disabled,
  onPaste,
  onChange,
  endAdornment,
  maxRows,
}: IInputProps) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const isPassword = useMemo(() => {
    return type === "password";
  }, [type]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordAttrs = useMemo(() => {
    return isPassword
      ? {
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <VisibilityOffIcon cursor="pointer" />
              ) : (
                <VisibilityIcon cursor="pointer" />
              )}
            </InputAdornment>
          ),
          type: isPasswordVisible ? "text" : "password",
        }
      : {};
  }, [isPasswordVisible, isPassword]);

  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            size={size}
            multiline={multiline}
            className={className}
            inputRef={inputRef}
            placeholder={placeholder}
            type={type || "text"}
            error={!!errors?.[name]?.message}
            helperText={!disabled && errors?.[name]?.message as any}
            fullWidth
            label={label}
            margin={margin}
            variant={variant}
            maxRows={maxRows}
            disabled={disabled}
            InputProps={{
              ...(startAdornment ? { startAdornment } : {}),
              ...(startAdornment ? { endAdornment } : {}),
              ...passwordAttrs,
              ...InputProps,
            }}
            onKeyPress={onKeyPress}
            onPaste={onPaste}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(event.target.value);
              onChange?.(event.target.value);
            }}
          />
        )}
      />
    </Fragment>
  );
};

export default HPInput;
