import axios, { AxiosRequestConfig } from "axios";

import { ELStorage } from "../store/config/constants";

const requestHeaders = {
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
};

const api = axios.create({
    headers: requestHeaders,
});

interface IConfig extends AxiosRequestConfig {
    hasFileUpload?: boolean;
}

api.interceptors.request.use((config: IConfig) => {
    const token = localStorage.getItem(ELStorage.accessToken);

    if (token) {
        return {
            ...config,
            headers: {
                ...config.headers,
                ...(config.hasFileUpload && [
                    { "Content-Type": "multipart/form-data" },
                ]),
                Authorization: `${token}`,
                language: "eng",
            },
        };
    }
    return config;
}, Promise.reject);

api.interceptors.response.use(
    (response) => response,
    (err) =>
        new Promise((resolve, reject) => {
            //@TODO remove condition and handle 401 cases when backand will be ready
            if (err.response.status === 401) {
                localStorage.removeItem(ELStorage.accessToken);
                window.location.href = '/login';
                return reject(err);
            }

            if (err.response.status === 403) {
                window.location.href = '/login';
                localStorage.removeItem(ELStorage.accessToken);
            }
            return reject(err);
        })
);

export default api;
