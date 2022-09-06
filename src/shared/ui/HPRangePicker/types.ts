export type IRangePickerProps = {
  name: string;
  rules?: any;
  label?: string;
  onChange?: (newValue: { startDate: string; endDate: string }) => void;
  customFormat?: string;
};
