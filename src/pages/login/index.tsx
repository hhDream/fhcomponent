/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-08 15:25:21
 * @LastEditTime: 2021-03-22 11:43:14
 * @LastEditors: Fenghua Zhang
 */
import React, { useContext, useEffect, useRef } from "react";
import { Layout, notification } from "antd";
import LoginForm from "./components/LoginForm";
import authContext from "../../stores/auth.store";
import { useHistory } from "react-router";
import "./login.scss";
const Login: React.FC = () => {
  const auth = useRef(useContext(authContext));
  const history = useRef(useHistory());

  const onLogin = () => {
    if (auth.current.isLogined) {
      history.current.push("/");
    }
  };

  useEffect(() => {
    auth.current.refreshTokenAsync().then(() => {
      onLogin();
    });
  }, []);

  const onFinish = (values: any) => {
    const { username, password, remember } = values;
    auth.current
      .loginAsync(username, password, remember)
      .then(() => {
        onLogin();
      })
      .catch((e) => {
        notification["error"]({
          message: "登录失败",
          description: e.message,
        });
      });
  };

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
  );
};

export default Login;
