export type ISelectProps = {
  name: string;
  rules?: any;
  size?: "medium" | "small";
  label: string;
  ellipsis?: boolean;
  options?: any[];
  valueProp?: string;
  textProp?: string;
  keyProp?: string;
  className?: string;
  inputLabelClassName?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  defaultValue?: string;
  multiple?: boolean;
  onChange?: (params?: any) => void;
};
