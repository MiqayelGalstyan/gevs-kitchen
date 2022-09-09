/* eslint-disable @typescript-eslint/no-unused-vars */
import {AsyncThunk} from "@reduxjs/toolkit";

export type IUseTableConfig<Returned, ThunkArg, _any> = {
    requestType?: 'body' | 'queryString',
    actionParam?: {
        key: string,
        value: string | number,
    },
    action: AsyncThunk<Returned, ThunkArg, any>,
    noInitialFetch?: boolean;
}
