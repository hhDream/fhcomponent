/*
import { React } from 'react';
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-11 14:37:38
 * @LastEditTime: 2021-03-11 16:14:27
 * @LastEditors: Fenghua Zhang
 */
import { Menu } from 'antd';
import { HomeOutlined, ExportOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    return <Menu>
        <Menu.Item>
            <Link to="/"> <HomeOutlined />首页</Link>
        </Menu.Item>
        <Menu.Item danger>
            <ExportOutlined />
            退出
            </Menu.Item>
    </Menu>
}

export default DropdownMenu;