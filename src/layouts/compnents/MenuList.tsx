/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-11 09:54:25
 * @LastEditTime: 2021-03-15 15:11:27
 * @LastEditors: Fenghua Zhang
 */

import { Menu } from 'antd';
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import Components from './../../autoRouter';



const MenuList: React.FC = () => {
    const location = useLocation();
    const { Item } = Menu;
    return <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} defaultSelectedKeys={['/']}>
        {
            Components.map((d) => {
                let p;
                if (!d.path.includes('login')) {
                    p = <Item key={d.path} icon={<HomeOutlined />}>
                        <Link to={d.path}>
                            {d.path.replace('/', '')}
                        </Link>
                    </Item>
                }
                return p
            })
        }
    </Menu>
}

export default MenuList;