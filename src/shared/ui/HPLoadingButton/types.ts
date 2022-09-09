import { MouseEventHandler } from "react";

export type IHPLoadingButton = {
  color?: "primary" | "secondary" | any;
  disabled?: boolean | any;
  fullWidth?: boolean | any;
  isLoading: boolean | any;
  children: JSX.Element | string | any;
  type?: string | any;
  size?: "medium" | "large" | "small" | any;
  variant?: "contained" | "outlined" | "text" | any;
  className?: string | any;
  onClick?: MouseEventHandler<HTMLAnchorElement> | any;
};
