import request from '../services/request.service';
import { AxiosResponse } from 'axios';
import Axios from 'axios';

export interface ResponseViewModel<T> {
    code: number;
    data: T;
    msg: string;
}

export interface LoginViweModel {
    username: string;
    token: string;
    roles: string[];
}

export function loginAsync(userName: string, passWord: string): Promise<AxiosResponse<ResponseViewModel<LoginViweModel>>> {
    return Axios.post('/login', {
        userName,
        passWord
    });
}

export function refreshTokenAsync(token: string) {
    return request.get('/refreshToken', { params: { token } });
}
