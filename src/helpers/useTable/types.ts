import {AsyncThunk} from "@reduxjs/toolkit";

export type IUseTableConfig<Returned, ThunkArg, ThunkApiConfig> = {
    requestType?: 'body' | 'queryString',
    actionParam?: {
        key: string,
        value: string | number,
    },
    action: AsyncThunk<Returned, ThunkArg, ThunkApiConfig>,
    noInitialFetch?: boolean;
}
