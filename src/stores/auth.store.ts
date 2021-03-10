import { makeAutoObservable } from 'mobx';
import { loginAsync, LoginViweModel, refreshTokenAsync } from '../api/auth.api';
import { createContext } from 'react';

export class AuthStore {
    isLogined = false;
    userInfo = {} as LoginViweModel;

    constructor() {
        makeAutoObservable(this);
    }

    setLogin(data: LoginViweModel) {
        this.userInfo = data;
        localStorage.setItem('token', this.userInfo.token);
        this.isLogined = true;
    }

    async loginAsync(username: string, password: string, remember: boolean = true) {
        const response = await loginAsync(username, password);
        if (response && response.data.code === 0) {
            this.setLogin(response.data.data);
        }
    }

    async refreshTokenAsync() {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await refreshTokenAsync(token);
            if (response && response.data.code === 0) {
                this.setLogin(response.data.data);
            }
        }
    }

    async logoutAsync() {
        localStorage.removeItem('token');
        this.userInfo = {} as LoginViweModel;
        this.isLogined = false;
    }
}

export const auth = new AuthStore();
export default createContext<AuthStore>(auth);
