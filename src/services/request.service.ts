import Axios from 'axios';
import { auth } from '../stores/auth.store';
import { message } from 'antd';
const baseURL = process.env.NODE_ENV === "development" ? 'http://127.0.0.1:7001/' : ''
const request = Axios.create({
    baseURL: baseURL,
    timeout: 5000
});
console.log("🚀 ~ file: request.service.ts ~ line 9 ~ process.env.BASE_URL", baseURL)

request.interceptors.request.use(
    (config) => {
        if (auth.isLogined) {
            config.headers.Authorization = `Bearer ${auth.userInfo.token?.toString()}`;
        }

        return config;
    },
    (error) => {
        message.error(error.message);
    }
);

request.interceptors.response.use(
    async (response) => {
        if (response.status === 200) {
            // 处理错误提示
            if (response.data.code !== 0) {
                message.error(response.data.message);
            }
        }

        if (response.data.code === 10000) {
            // 刷新token
            // auth.RefreshTokenAsync();

            // 上次失败重发
            const result = await request(response.config);
            return result;
        }

        return response;
    },
    (error) => {
        switch (error.response.status) {
            case 400:
                // 数据提交验证错误
                //   if (error.response.data.code === 10400) {
                //     validateErrors.setErrors(error.response.data.data);
                //   }
                break;
            case 401:
            case 403:
            default:
                message.error(error.response.data.message);
                break;
        }
    }
);

export default request;
