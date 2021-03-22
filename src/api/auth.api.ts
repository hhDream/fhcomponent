import request from "../services/request.service";
import { AxiosResponse } from "axios";

export interface ResponseViewModel<T> extends AxiosResponse {
  code: number;
  data: T;
  message: string;
}

export interface LoginViweModel {
  username: string;
  token: string;
  roles: string[];
  id: number;
}

export function loginAsync(
  username: string,
  password: string
): Promise<ResponseViewModel<LoginViweModel>> {
  return request.post("/login", {
    username,
    password,
  });
}

export function refreshTokenAsync(
  token: string
): Promise<ResponseViewModel<any>> {
  return request.get("/refreshToken", { params: { token } });
}
