import request from '../services/request.service';
import { AxiosResponse } from 'axios';

export interface ResponseViewModel<T> {
    code: number;
    data: T;
    msg: string;
}

export interface LoginViweModel {
    username: string;
    token: string;
    roles: string[];
    id: number;
}

export function loginAsync(username: string, password: string): Promise<AxiosResponse<ResponseViewModel<LoginViweModel>>> {
    return request.post('/login', {
        username,
        password
    });
}

export function refreshTokenAsync(token: string) {
    return request.get('/refreshToken', { params: { token } });
}
