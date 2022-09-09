import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/axios";
import { EBaseUrl } from "../../store/config/constants";
import thunkOptions from "../../store/config/thunkOptions";
import { IProductsInitialState , IProductsGridResponse } from "../models/products.interface";

const name = "PRODUCTS";

const initialState: IProductsInitialState = {
    productsGrid: null,
};

export const fetchProductsGrid = createAsyncThunk<IProductsGridResponse, string>(
    `${name}/fetchProductsGrid`,
    async (queryString) =>
        (await api.get(`${EBaseUrl.API_KEY}/Products?${queryString}`)).data,
    thunkOptions
);

const ProductsSlice = createSlice({
    initialState,
    name,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchProductsGrid.fulfilled,
            (state, { payload }: { payload: IProductsGridResponse }) => {
                state.productsGrid = payload;
            }
        );
    },
});

export const getProducts = ({ products }: { products: IProductsInitialState }) => products.productsGrid;

export default ProductsSlice.reducer;
