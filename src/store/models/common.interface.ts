export type IReducedInitialState = {
    auth: {
      isAuth: boolean;
    };
  };
  
  export type IGridBaseResponseMeta = {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
  
  export type IGridBaseResponseLinks = {
    first: string;
    last: string;
    next: string;
    previous: string;
  };
  
  export type IGridBaseResponse = {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
  
  export type IGridBaseRequest = {
    page: number;
  };
  
  export type IListBase = {
    id: number;
    name: string;
  };
  
  export enum ESortingDirections {
    asc = "ASC",
    desc = "DESC",
  }
  