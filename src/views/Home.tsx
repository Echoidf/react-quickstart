import React, { useState } from 'react';
import {Outlet, useNavigate} from 'react-router-dom'

import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', '/user', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ])
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navigateTo = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const menuClick = (e:{key:string}) => {
        console.log(e.key)
        //点击菜单进行跳转--编程式导航
        navigateTo(e.key)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
            </Sider>

            {/* 右侧内容 */}
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} >
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight:'64px', paddingLeft:'20px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0', padding: 24, minHeight: 360, background: colorBgContainer}}>
                    <Outlet></Outlet>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight:'48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;