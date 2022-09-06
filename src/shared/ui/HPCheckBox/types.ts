import { MouseEventHandler } from "react";

export type IHPCheckBoxProps = {
  name: string;
  rules?: any;
  color?: "primary" | "secondary" | "default";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
};
