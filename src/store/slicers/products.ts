import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/axios";
import { EBaseUrl } from "../../store/config/constants";
import thunkOptions from "../../store/config/thunkOptions";
import { IProductsInitialState , IProductsGridResponse, IGetProductByIdResponse, IAddEditProduct } from "../models/products.interface";

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

export const getProductById = createAsyncThunk<IGetProductByIdResponse, number>(
    `${name}/getProductById`,
    async (id) =>
        (await api.get(`${EBaseUrl.API_KEY}/Products/${id}`)).data,
    thunkOptions
);

export const addProduct = createAsyncThunk<
    any,
    { data: Omit<IAddEditProduct, 'id'> }
>(
    `${name}/addProduct`,
    async ({ data }) =>
        (await api.post(`${EBaseUrl.API_KEY}/Products`, data)).data,
    thunkOptions
);

export const updateProduct = createAsyncThunk<
    any,
    { data: IAddEditProduct }
>(
    `${name}/updateProduct`,
    async ({ data }) =>
        (await api.put(`${EBaseUrl.API_KEY}/Products`, data)).data,
    thunkOptions
);

export const deleteProduct = createAsyncThunk<null, string>(
    `${name}/deleteProduct`,
    async (id: string) => (await api.delete(`${EBaseUrl.API_KEY}/Products/${id}`)).data,
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
