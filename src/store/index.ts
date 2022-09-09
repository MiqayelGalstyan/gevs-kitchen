import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import errorHandling from "./middlewares/errorHandling";
import { IReducedInitialState } from "./models/common.interface";
import auth from './slicers/auth';
import categories from './slicers/categories';
import products from './slicers/products';


const initialState: IReducedInitialState = {
    auth: {
        isAuth: false,
    },
};

const combinedReducers = combineReducers({
    auth,
    categories,
    products,
});

const rootReducer = (state: any, action: Action) => {
    if (action.type === "AUTH/signOut") {
        state = initialState;
    }
    return combinedReducers(state, action);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(errorHandling),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;