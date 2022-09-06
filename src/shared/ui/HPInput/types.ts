import { ClipboardEvent, KeyboardEvent, Ref } from "react";

export type IInputProps = {
  multiline?: boolean;
  size?: "small" | "medium";
  className?: string;
  name: string;
  label?: string;
  startAdornment?: JSX.Element;
  variant?: "outlined" | "filled" | "standard";
  placeholder?: string;
  type?: string;
  margin?: "none" | "dense" | "normal";
  InputProps?: any;
  clearable?: boolean;
  maxRows?: number;
  rules?: any;
  onClear?: () => void;
  onKeyPress?: (parameter: KeyboardEvent<HTMLDivElement>) => void;
  onPaste?: (param: ClipboardEvent<HTMLDivElement>) => void;
  endAdornment?: {
    icon: JSX.Element,
    action: () => void,
  },
  disabled?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  onChange?: (value: string) => void;
};
