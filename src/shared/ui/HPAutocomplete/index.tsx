import { Controller, useFormContext } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IHPAutocompleteProps } from "./types";
import { toast } from "react-hot-toast";
import { nanoid } from "@reduxjs/toolkit";

const styles = makeStyles({
  error: {
    "& .MuiInputLabel-outlined ": {
      color: "#f44336",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f44336 !important",
    },
  },
});

enum EActionReason {
  removeOption = "removeOption",
}

const HPAutocomplete = (props: IHPAutocompleteProps) => {
  const {
    size = "small",
    name,
    freeSolo = false,
    rules,
    multiple,
    maxItems,
    isInputChange,
    onInputChange,
    autoSelect = false,
    disabled,
    className,
    options,
    label,
    optionLabelKey = "name",
    disableClearable,
    onChange,
    groupBy,
    getOptionDisabled,
    onRenderOption,
    onPaste,
    onClose,
    onOpen,
  } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const classes = styles();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <Autocomplete
            {...field}
            groupBy={groupBy}
            size={size}
            freeSolo={freeSolo}
            multiple={field?.value !== null ? multiple : false}
            className={`${className} ${
              !!errors?.[name]?.message && !disabled && classes.error
            }`}
            disabled={disabled}
            options={options}
            disableClearable={disableClearable}
            autoSelect={autoSelect}
            renderOption={onRenderOption ? (props: any, optionProp: any) => (
              <div {...props} key={nanoid(10)}>
                {onRenderOption?.(optionProp)}
              </div>
            ) : undefined}
            onOpen={onOpen}
            onClose={onClose}
            getOptionLabel={(option: any) =>
              option
                ? typeof option === "object"
                  ? option?.[optionLabelKey]
                  : option
                : ""
            }
            getOptionDisabled={getOptionDisabled}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={!!errors?.[name]?.message}
                color="primary"
                helperText={errors?.[name]?.message}
                variant="outlined"
                disabled={disabled}
              />
            )}
            {...(isInputChange && {
              onInputChange: (event, newInputValue) => {
                onInputChange?.(newInputValue);
              },
            })}
            onPaste={onPaste}
            onChange={(e, value, actionReason) => {
              if (
                actionReason !== EActionReason.removeOption &&
                multiple &&
                maxItems &&
                maxItems < value?.length
              ) {
                toast.error(`Maximum items count is ${maxItems}`);
                return;
              }
              field.onChange(value);
              onChange?.(value);
            }}
          />
        );
      }}
    />
  );
};

export default HPAutocomplete;
