import { create } from "apisauce";
import { AxiosRequestConfig } from "axios";

import { BASE_URL } from "./constants";
import { ErrorResponse } from "./error";

export const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const authConfig = (): AxiosRequestConfig => {
  // TODO: Uncomment this when auth store is set up
  // const auth = Store.store.stores.authStore;
  // if (auth.loggedIn) {
  //   return { headers: { Authorization: `Bearer ${auth.token!}` } };
  // }
  return {};
};

export const get = async <T, P extends {}>(url: string, params?: P) =>
  await api.get<T, ErrorResponse>(url, params ?? {}, authConfig());
export const post = async <T, D extends any>(url: string, data?: D) =>
  await api.post<T, ErrorResponse>(url, data, authConfig());
export const put = async <T, D extends any>(url: string, data?: D) =>
  await api.put<T, ErrorResponse>(url, data, authConfig());
export const del = async <T, P extends {}>(url: string, params?: P) =>
  await api.delete<T, ErrorResponse>(url, params ?? {}, authConfig());
