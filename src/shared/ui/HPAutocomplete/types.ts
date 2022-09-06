import { ReactNode } from "react";
import { RegisterOptions } from "react-hook-form";

export type IOption = {
  id: number;
  name?: string;
  value?: number | string;
  label?: string;
};

export type IHPAutocompleteProps = {
  size?: "small" | "medium";
  name: string;
  maxItems?: number;
  freeSolo?: boolean;
  rules?: RegisterOptions;
  multiple?: boolean;
  isInputChange?: boolean;
  onInputChange?: (value: string) => void;
  autoSelect?: boolean;
  disabled?: boolean;
  className?: string;
  options: Array<IOption>;
  label: string;
  optionLabelKey?: string;
  disableClearable?: boolean;
  onChange?: (value: string | IOption | Array<IOption> | null) => void;
  groupBy?: (options: IOption) => string;
  onRenderOption?: (option: any) => ReactNode;
  onPaste?: (value: any) => any;
  getOptionDisabled?: (option: any) => boolean;
  onOpen?: () => void;
  onClose?: () => void;
};
