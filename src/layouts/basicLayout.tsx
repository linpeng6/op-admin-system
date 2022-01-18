import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import HeaderBlock from './header';
import SideBlock from './side';
import TabMenuBlock from './tabMenu';
import ErrorBoundary from '@comp/errorBoundary';
import { getMenuListApi } from '@/services/index';
import { RootState, MenuOption } from '@/redux/interface';
import { changeMenuList, changeRoute } from '@/redux/action/menu';
import { recurseFlattenTree } from '@/utils/util';
import Container from '@comp/layout/container';

const { Header, Sider, Content, Footer } = Layout;

const index: React.FC<any> = (props) => {
  const { menu } = useSelector((state: RootState) => state);
  const { tabMenus, selectedKey } = menu;

  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async (): Promise<void> => {
    const res: any = await getMenuListApi();
    if (res.code === 1) {
      const menuTree: MenuOption[] = [...res.data];
      const menuFlattenList: MenuOption[] = [];
      recurseFlattenTree(menuTree, menuFlattenList);
      dispatch(changeMenuList(menuTree, menuFlattenList));
      const selectedKey = sessionStorage.getItem('selectedKey');
      if (!selectedKey) {
        return;
      }
      dispatch(changeRoute(selectedKey, dispatch));
    } else {
      dispatch(changeMenuList([], []));
    }
  };

  const toggle = (): void => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ height: '100vh', minWidth: '1200px' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <div className="sider-layout">
          <SideBlock menu={menu} dispatch={dispatch} />
        </div>
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
            {tabMenus.map((item) => {
              if (item.path === selectedKey) {
                return <RouterComp key={item.path} {...props} />;
              }
              return null;
            })}
          </ErrorBoundary>
        </Content>
        <Footer style={{ textAlign: 'center', padding: '12px 50px' }}>
          ©2021 Created by ripper
        </Footer>
      </Layout>
    </Layout>
  );
};

const RouterComp = (props: any) => {
  return (
    <div className="main-content">
      <Container>{props.children}</Container>
    </div>
  );
};

export default memo(index);
