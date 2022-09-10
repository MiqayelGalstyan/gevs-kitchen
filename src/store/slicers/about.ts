import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../helpers/axios";
import { EBaseUrl } from "../config/constants";
import thunkOptions from "../config/thunkOptions";
import { IAboutInitialState, IChangeAboutRequest, IGetAboutResponse } from "../models/about.interface";

const name = "ABOUT";

export const changeAboutText = createAsyncThunk<any, IChangeAboutRequest>(
    `${name}/SignIn`,
    async (formData) =>
        (await api.put(`${EBaseUrl.API_KEY}/About`, formData)).data,
    thunkOptions
);

export const fetchAboutText = createAsyncThunk<IGetAboutResponse>(
    `${name}/fetchCategoriesGrid`,
    async () =>
        (await api.get(`${EBaseUrl.API_KEY}/About`)).data,
    thunkOptions
);

const initialState: IAboutInitialState = {
    text: "",
};

const AboutSlicer = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchAboutText.fulfilled,
            (state, { payload }: { payload: IGetAboutResponse }) => {
                state.text = payload.text ?? "";
            }
        );
    },
});

export const getAboutText = ({ about }: { about: IAboutInitialState }) => about.text;


export default AboutSlicer.reducer;
