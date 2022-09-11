import { ICategory } from "./categories.interface";
import { IGridBaseResponse } from "./common.interface";

export interface IProductsInitialState {
    productsGrid: null | IProductsGridResponse;
}

export interface IProductsGridResponse {

}

export interface IProductsGridResponse extends IGridBaseResponse {
    results: IProduct[];
}

export interface IProduct {
    id: number;
    images: string[];
    description: string;
    creationDate: string;
    categories: string[];
    price: number;
    created_at: string;
}

export interface IAddEditProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryIds: number[];
    images: string[];
}

export interface IGetProductByIdResponse {
    id: number;
    name: string;
    categories: ICategory[];
    creationDate: string;
    description: string;
    images: string[];
    price: number;
}