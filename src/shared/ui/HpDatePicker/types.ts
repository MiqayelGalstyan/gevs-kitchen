export type IDatePickerProps = {
  name: string;
  rules?: any;
  label?: string;
  disabledDate?: (currentDate: any) => boolean;
  onChange?: (newValue: string | undefined) => void;
  customFormat?: string;
};
