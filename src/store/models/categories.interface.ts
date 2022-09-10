import { IGridBaseResponse } from "./common.interface";

export interface ICategoriesInitialState {
    categoriesGrid: null | ICategoriesGridResponse;
}

export interface ICategoriesGridResponse extends IGridBaseResponse {
    results: ICategory[];
}

export interface ICategory {
    id: number;
    name: string;
    creationDate: string;
}

export interface IAddEditCategory {
    id: number;
    name: string;
}

export interface IGetCategoryByIdResponse {
    id: number;
    name: string;
}