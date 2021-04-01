/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-15 11:43:16
 * @LastEditTime: 2021-03-30 17:21:17
 * @LastEditors: Fenghua Zhang
 */
import { Table, Modal, Form, Input, InputNumber } from "antd";
import React from "react";
import { Button } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { addUser, getUserList } from "../../api/user.api";
import { message } from "antd";
import { useEffect } from "react";
import { useRef } from "react";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const validateMessages = {
  required: "${label}不能为空!",
  types: {
    email: "${label}不符合规范!",
    number: "${label}不是数字!",
  },
  number: {
    range: "${label}必须在 ${min} ~ ${max}",
  },
};

const FormBlock = ({ form }) => {
  return (
    <Form
      {...layout}
      name="nest-messages"
      form={form}
      validateMessages={validateMessages}
    >
      <Form.Item name={["name"]} label="名字" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={["age"]} label="年龄" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["username"]}
        label="用户名"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["password"]} label="密码" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};

const ListPage: React.FC = () => {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "账号",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "创建时间",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "修改时间",
      dataIndex: "updated_at",
      key: "updated_at",
    },
  ];
  let [dataSource, setDataSource] = useState([]);
  let [visible, setVisible] = useState(false);
  let [modalTitle, setModalTitle] = useState("新增");
  let [confirmLoading, setConfirmLoading] = useState(false);
  let currentPage = useRef(1);
  let [total, setTotal] = useState(0);
  const [form] = Form.useForm();
  const getData = () => {
    getUserList(currentPage.current).then((res) => {
      if (res) {
        setTotal(res.data.count);
        setDataSource(res.data.rows);
      }
    });
  };

  const handleOk = () => {
    setConfirmLoading(true);
    form
      .validateFields()
      .then((d) => {
        addUser(d)
          .then((res) => {
            message.success(res.message);
            setVisible(false);
            setConfirmLoading(false);
            form.resetFields();
            getData();
          })
          .catch((error) => {
            setConfirmLoading(false);
          });
      })
      .catch((error) => {
        setConfirmLoading(false);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = () => {
    setModalTitle("新增");
    setVisible(true);
  };

  const handleTableChange = (page) => {
    currentPage.current = page;
    getData();
  };

  const paginationProps = {
    page: currentPage,
    onChange: (page) => handleTableChange(page),
    total,
  };

  const doDelete = () => {};
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  //   载入时获取列表数据
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="list-page">
      <Button
        type="primary"
        onClick={showModal}
        icon={<PlusOutlined />}
        size="middle"
      >
        新增
      </Button>
      <Button
        type="primary"
        onClick={doDelete}
        icon={<DeleteOutlined />}
        size="middle"
      >
        删除
      </Button>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        style={{ marginTop: "10px" }}
        dataSource={dataSource}
        columns={columns}
        pagination={paginationProps}
      />
      <Modal
        title={modalTitle}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <FormBlock form={form} />
      </Modal>
    </div>
  );
};

export default ListPage;
