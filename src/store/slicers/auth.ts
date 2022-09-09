import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LSRemoveMultiple } from "../../helpers";
import api from "../../helpers/axios";
import { EBaseUrl, ELStorage } from "../config/constants";
import thunkOptions from "../config/thunkOptions";
import { ISignInResponse, ISignInRequest } from "../models/auth.interface";

const name = "AUTH";

export const SignIn = createAsyncThunk<ISignInResponse, ISignInRequest>(
  `${name}/SignIn`,
  async (formData) =>
    (await api.post(`${EBaseUrl.API_KEY}/Users/Login`, formData)).data,
  thunkOptions
);

const initialState = {
  isAuth: !!localStorage.getItem(ELStorage.accessToken),
};

const AuthSlicer = createSlice({
  name,
  initialState,
  reducers: {
    signOut: (state) => {
      state.isAuth = false;
      LSRemoveMultiple([
        ELStorage.accessToken,
      ]);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      SignIn.fulfilled,
      (state, { payload }: { payload: ISignInResponse }) => {
        localStorage.setItem(ELStorage.accessToken, `Bearer ${payload.accessToken}`);
        state.isAuth = true;
      }
    );
  },
});

export const { signOut } = AuthSlicer.actions;

export default AuthSlicer.reducer;
