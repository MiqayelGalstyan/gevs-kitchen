import { ElementType, MouseEventHandler } from "react";

export type IHPLoadingButton = {
  color?: "primary" | "secondary";
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading: boolean;
  children: JSX.Element | string | any;
  type?: string;
  size?: "medium" | "large" | "small";
  variant?: "contained" | "outlined" | "text";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};
