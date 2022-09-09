import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/axios";
import { EBaseUrl } from "../../store/config/constants";
import thunkOptions from "../../store/config/thunkOptions";
import { ICategoriesInitialState, ICategoriesGridResponse } from "../models/categories.interface";

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
