import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/axios";
import { EBaseUrl } from "../../store/config/constants";
import thunkOptions from "../../store/config/thunkOptions";
import { ICategoriesInitialState, ICategoriesGridResponse, IAddEditCategory, IGetCategoryByIdResponse } from "../models/categories.interface";

const name = "CATEGORIES";

const initialState: ICategoriesInitialState = {
    categoriesGrid: null,
};

export const fetchCategoriesGrid = createAsyncThunk<ICategoriesGridResponse, string>(
    `${name}/fetchCategoriesGrid`,
    async (queryString) =>
        (await api.get(`${EBaseUrl.API_KEY}/Categories?${queryString}`)).data,
    thunkOptions
);

export const getCategoryById = createAsyncThunk<IGetCategoryByIdResponse, number>(
    `${name}/getCategoryById`,
    async (id) =>
        (await api.get(`${EBaseUrl.API_KEY}/Categories/${id}`)).data,
    thunkOptions
);

export const addCategory = createAsyncThunk<
    any,
    { data: Omit<IAddEditCategory, 'id'> }
>(
    `${name}/addCategory`,
    async ({ data }) =>
        (await api.post(`${EBaseUrl.API_KEY}/Categories`, data)).data,
    thunkOptions
);

export const updateCategory = createAsyncThunk<
    any,
    { data: IAddEditCategory }
>(
    `${name}/updateCategory`,
    async ({ data }) =>
        (await api.put(`${EBaseUrl.API_KEY}/Categories`, data)).data,
    thunkOptions
);

export const deleteCategory = createAsyncThunk<null, string>(
    `${name}/deleteCategory`,
    async (id: string) => (await api.delete(`${EBaseUrl.API_KEY}/Categories/${id}`)).data,
    thunkOptions
);

const CategoriesSlice = createSlice({
    initialState,
    name,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchCategoriesGrid.fulfilled,
            (state, { payload }: { payload: ICategoriesGridResponse }) => {
                state.categoriesGrid = payload;
            }
        );
    },
});

export const getCategories = ({ categories }: { categories: ICategoriesInitialState }) => categories.categoriesGrid;

export default CategoriesSlice.reducer;
