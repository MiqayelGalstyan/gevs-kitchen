import { AxiosError, AxiosResponse } from "axios";

const thunkOptions: IThunkOptions = {
  serializeError: (
    error: Record<string, { status: AxiosError; data: AxiosResponse }>
  ) => {
    return {
      status: error.response?.status,
      data: error.response?.data,
    };
  },
};

export type IThunkOptions = {
  serializeError?: any
};
export default thunkOptions;
