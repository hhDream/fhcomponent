
import React from 'react';
import { Layout, message } from 'antd';
import LoginForm from './components/LoginForm'
import './login.css'
const Login: React.FC = () => {
    const onFinish = () => {
        message.success('登录成功')
    }
    return (
        <Layout>
            <Layout.Content className="antd-pro-layouts-user-layout-container">
                <div className="antd-pro-layouts-user-layout-content">
                    <div className="antd-pro-pages-user-login-style-main">
                        <LoginForm onFinish={onFinish} />
                    </div>
                </div>
            </Layout.Content>
        </Layout>
    )
}

export default Login;