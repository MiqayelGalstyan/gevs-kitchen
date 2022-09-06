import { Fragment, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Box,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import {makeStyles} from '@mui/styles';

interface IHPTextAreaProps {
  name: string;
  rules?: any;
  placeholder: string;
  label: string;
  customErrorMessage?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    resize: "none",
    width: "100%",
    fontSize: 16,
    padding: "18.5px 14px",
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderRadius: 4,
  },
  errorMessage: {
    fontSize: 12,
    marginLeft: 14,
    marginRight: 14,
    color: theme.palette.secondary.main,
  },
  muiError: {
    borderColor: theme.palette.secondary.main,
    "&:focus-visible": {
      border: `2px solid ${theme.palette.secondary.main}`,
      outline: "none",
    },
  },
  muiLabelError: {
    color: theme.palette.secondary.main,
  },
}));

const HPTextArea = ({
  name,
  rules,
  placeholder,
  label,
  customErrorMessage,
}: IHPTextAreaProps) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const classes = useStyles();

  const errorMessage = useMemo(() => errors?.[name]?.message, [errors]);

  const errorMessageStyles = useMemo(
    () => (customErrorMessage || errorMessage) && classes.muiError,
    [customErrorMessage, errorMessage]
  );

  const labelErrorMessageStyles = useMemo(
    () => (customErrorMessage || errorMessage) && classes.muiLabelError,
    [customErrorMessage, errorMessage]
  );

  const errorMessageContainer = useMemo(
    () =>
      errorMessage || customErrorMessage ? (
        <Typography color="secondary" className={classes.errorMessage}>
          {customErrorMessage ? customErrorMessage : errorMessage}
        </Typography>
      ) : null,
    [customErrorMessage, errorMessage]
  );

  return (
    <Fragment>
      <Box padding={1} className={labelErrorMessageStyles}>
        {label}
      </Box>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <TextareaAutosize
            {...field}
            aria-label="text area"
            className={`${classes.root} ${errorMessageStyles}`}
            placeholder={placeholder}
          />
        )}
      />
      {errorMessageContainer}
    </Fragment>
  );
};

export default HPTextArea;
