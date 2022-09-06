import { Action, isRejected } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface IActionErrors extends Action {
  error: {
    data: {
      key: string;
    };
    status: number;
  };
}

const errorHandling =
  () =>
  (next: (arg: IActionErrors) => void) =>
  (action: IActionErrors): void => {
    if (isRejected(action)) {
      if(action.error.status === 500) {
         toast.error('Something went wrong');
        return
      }

      if(action.error.status === 401) {
        toast.error('Not authorized please log-in');
        return
      }

      if(action?.error?.data) {
        const errors = action.error.data as any;
        if(Object.keys(errors).length) {
          for(let error in errors) {
            errors[error]?.isNotEmpty
                ? toast.error(errors[error].isNotEmpty)
                : toast.error(errors[error]);
          }
        }
      }
    }

    return next(action);
  };

export default errorHandling;
