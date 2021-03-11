/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-11 09:54:25
 * @LastEditTime: 2021-03-11 14:06:42
 * @LastEditors: Fenghua Zhang
 */

import { Menu } from 'antd';
import React from 'react';
import { HomeOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';

const MenuList: React.FC = () => {
    const location = useLocation();
    const { Item } = Menu;
    return <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} defaultSelectedKeys={['/']}>
        <Item key="/" icon={<HomeOutlined />}>
            <Link to="/">
                首页
            </Link>
        </Item>
        <Item key="/buttonPage">
            <Link to="/buttonPage">
                按钮
            </Link>
        </Item>
    </Menu>
}

export default MenuList;