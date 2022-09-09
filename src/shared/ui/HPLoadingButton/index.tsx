import { Button, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IHPLoadingButton } from "./types";

const useStyles = makeStyles((Theme: any): any => ({
  buttonWrapper: {
    position: "relative",
    display: "block",
    overflow: "hidden",
    boxShadow: "none",
  },
  loader: {
    position: "absolute !important",
    right: 0,
    bottom: 0,
    left: 0,
  },
  colorPrimary: {
    color: "red",
  },
  barColorPrimary: {
    backgroundColor: "#72a250",
  },
  barColorSecondary: {
    backgroundColor: "#72a250",
  },
}));

const HPLoadingButton = (props: IHPLoadingButton) => {
  const {
    color,
    disabled,
    fullWidth,
    isLoading,
    children,
    type,
    variant,
    size,
    className,
    onClick,
  } = props;
  const classes = useStyles({ fullWidth }) as any;

  return (
    <Button
      color={color}
      className={`${classes.buttonWrapper} ${className}` as any}
      disabled={isLoading || disabled}
      fullWidth={fullWidth}
      type={type}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {children}
      {isLoading && (
        <LinearProgress className={classes.loader as any} color={color} />
      )}
    </Button>
  );
};

export default HPLoadingButton;
