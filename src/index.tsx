/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-03 15:25:10
 * @LastEditTime: 2021-03-11 14:49:18
 * @LastEditors: Fenghua Zhang
 */
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
