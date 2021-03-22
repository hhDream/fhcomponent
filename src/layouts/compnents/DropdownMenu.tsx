/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-11 14:37:38
 * @LastEditTime: 2021-03-15 11:34:58
 * @LastEditors: Fenghua Zhang
 */
import { Menu } from 'antd';
import { HomeOutlined, ExportOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React from 'react';



const DropdownMenu = () => {
    const loginOut = () => {
        localStorage.clear()
    };
    return <Menu>
        <Menu.Item>
            <Link to="/"> <HomeOutlined />首页</Link>
        </Menu.Item>
        <Menu.Item danger onClick={loginOut}>
            <Link to="/login">
                <ExportOutlined />
            退出
            </Link>
        </Menu.Item>
    </Menu>
}

export default DropdownMenu;