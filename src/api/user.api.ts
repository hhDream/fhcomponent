/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-16 14:57:11
 * @LastEditTime: 2021-03-22 15:51:01
 * @LastEditors: Fenghua Zhang
 */
import request from "./../services/request.service";
import { ResponseViewModel } from "./auth.api";

export interface UserModel {
  username: string;
}

export function addUser({
  username,
  password,
  name,
  age,
}): Promise<ResponseViewModel<UserModel>> {
  return request.post("/user/register", {
    username,
    password,
    name,
    age,
  });
}

export function getUserList(currentPage) {
  return request.post("/user/getList", {
    currentPage,
  });
}
