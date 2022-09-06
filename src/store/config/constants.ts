export enum ELStorage {
    accessToken = "accessToken",
    accessTokenExpiration = "accessTokenExpiration",
  }
  
  export enum ERequestStatus {
    FULFILLED = "fulfilled",
    PENDING = "pending",
    REJECTED = "rejected",
  }
  
  export const EBaseUrl = import.meta.env.API_KEY;
  