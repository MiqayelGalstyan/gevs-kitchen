import { FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  message: {
    color: "#f44336",
    fontSize: "0.75rem",
    marginLeft: "14px",
    marginRight: "14px",
    marginTop: "3px",
  },
});

const ErrorText = ({ errors, name }: { errors: FieldErrors; name: string }) => {
  const classes = styles();

  return (
    <ErrorMessage
      name={name}
      errors={errors}
      render={() => {
        return <p className={classes.message}>{errors[name].message}</p>;
      }}
    />
  );
};

export default ErrorText;
