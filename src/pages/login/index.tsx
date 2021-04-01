/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-08 15:25:21
 * @LastEditTime: 2021-03-26 10:58:34
 * @LastEditors: Fenghua Zhang
 */
import React, { useContext, useEffect, useRef } from "react";
import { Layout } from "antd";
import LoginForm from "./components/LoginForm";
import authContext from "../../stores/auth.store";
import { useHistory } from "react-router";
import "./login.scss";
import { useState } from "react";
const Login: React.FC = () => {
  const auth = useRef(useContext(authContext));
  const history = useRef(useHistory());

  const onLogin = () => {
    if (auth.current.isLogined) {
      history.current.push("/");
    }
  };
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    auth.current.refreshTokenAsync().then(() => {
      onLogin();
    });
  }, []);

  const onFinish = (values: any) => {
    setIsLoading(true);
    const { username, password, remember } = values;
    auth.current
      .loginAsync(username, password, remember)
      .then(() => {
        setIsLoading(false);
        onLogin();
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      <Layout.Content className="antd-pro-layouts-user-layout-container">
        <div className="antd-pro-layouts-user-layout-content">
          <div className="antd-pro-pages-user-login-style-main">
            <LoginForm onFinish={onFinish} loading={isLoading} />
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
