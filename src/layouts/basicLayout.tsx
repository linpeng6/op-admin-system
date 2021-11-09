import React, { memo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import HeaderBlock from './header';
import SideBlock from './side';
import TabMenuBlock from './tabMenu';
import ErrorBoundary from '@comp/errorBoundary';
import { getMenuListApi } from '@/services/index';
import { RootState } from '@/redux/interface';

const { Header, Sider, Content, Footer } = Layout;

const index: React.FC<any> = (props) => {
  const { tabMenus, selectedKey } = useSelector(
    (state: RootState) => state.menu,
  );
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState([]);

  // console.log(props)
  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async (): Promise<void> => {
    let res = await getMenuListApi();
    setMenu(res.data || []);
  };

  const toggle = (): void => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ height: '100vh', minWidth: '1200px' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <SideBlock menu={menu} />
      </Sider>
      <Layout className="site-layout">
        <Header className="header-layout">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
          <HeaderBlock />
        </Header>
        <Content className="main-layout">
          <TabMenuBlock />
          <ErrorBoundary>
            {
              tabMenus.map(item => {
                if(item.path === selectedKey){
                  return <RouterComp key={item.path} {...props} />
                }
                return null;
              })
            }
          </ErrorBoundary>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by ripper</Footer>
      </Layout>
    </Layout>
  );
};

const RouterComp = (props: any) => {
  return <>{props.children}</>;
};

export default memo(index);
