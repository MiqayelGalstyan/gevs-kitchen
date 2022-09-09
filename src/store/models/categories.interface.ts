import { IGridBaseResponse } from "./common.interface";

export interface ICategoriesInitialState {
    categoriesGrid: null | ICategoriesGridResponse;
}

export interface ICategoriesGridResponse extends IGridBaseResponse {
    results: ICategory[];
}

export interface ICategory {
    created_at: string;
}