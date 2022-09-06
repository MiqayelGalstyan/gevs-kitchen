export type IHPSwitchProps = {
  name: string;
  rules?: any;
  label?: string;
  onChangeCb?: (checked: boolean) => void;
};
