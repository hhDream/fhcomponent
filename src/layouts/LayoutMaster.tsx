import React from 'react';
import { Layout } from 'antd';

import './LayoutMaster.css';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const LayoutMaster: React.FC = (props) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const { Header, Sider, Footer } = Layout;

    const onTrigger = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className="components-layout-demo-custom-trigger" style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: onTrigger
                    })}
                </Header>
                {props.children}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutMaster;
