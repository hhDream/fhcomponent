/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-08 15:44:33
 * @LastEditTime: 2021-03-26 10:55:02
 * @LastEditors: Fenghua Zhang
 */
import { Form, Input, Checkbox, Button } from "antd";
import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

interface Props {
  onFinish: (values: any) => void;
  loading: boolean;
}

const LoginForm: React.FC<Props> = (props) => {
  return (
    <Form
      id="components-form-demo-normal-login"
      name="loginForm"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={props.onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="请输入账号" prefix={<UserOutlined />}></Input>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password
          placeholder="请输入密码"
          prefix={<LockOutlined />}
        ></Input.Password>
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>自动登录</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          loading={props.loading}
          htmlType="submit"
          className="login-form-button"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
