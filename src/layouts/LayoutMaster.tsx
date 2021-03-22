/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-08 09:10:07
 * @LastEditTime: 2021-03-15 14:58:15
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import { Layout, Dropdown, Breadcrumb } from 'antd';
import './LayoutMaster.scss';
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import MenuList from './compnents/MenuList';
import userAvatar from './static/user-avatar.jpg'
import DropdownMenu from './compnents/DropdownMenu';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const LayoutMaster: React.FC = (props) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const { Header, Sider, Footer, Content } = Layout;
    const location = useLocation()
    const onTrigger = () => {
        setCollapsed(!collapsed);
    };
    // const breadcrumbNameMap = {
    //     '/': '首页',
    //     '/buttonPage': '按钮'
    // };
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{url.replace('/', '')}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <Layout className="components-layout-demo-custom-trigger" style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <MenuList />
            </Sider>
            <Layout>
                <Header className='layout-header' style={{ background: '#fff', padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: onTrigger
                    })}
                    <Breadcrumb className='layout-breadcrumb'>{breadcrumbItems}</Breadcrumb>
                    <div className='user-tool-box'>
                        <img className='user-avatar' src={userAvatar} alt="" />
                        <Dropdown overlay={DropdownMenu}>
                            <span className="user-name" >
                                飞翔的🍂🐧 <DownOutlined />
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Content style={{ margin: '16px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutMaster;
