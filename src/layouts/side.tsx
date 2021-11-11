import React, { Key, Dispatch } from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import { MenuState, MenuOption } from '@/redux/interface';
import { changeOpenKeys } from '@/redux/action/menu';

interface IMenu {
  menu: MenuState;
  dispatch: Dispatch<any>;
}

const { SubMenu } = Menu;

const index: React.FC<IMenu> = (props) => {
  const {
    menu: { menuTree, openKeys, selectedKey },
    dispatch,
  } = props;
  // const rootKeys = menuTree?.map(item=> item.path)

  const clickMenu = ({ key }: any) => {
    history.push(key);
  };

  const onOpenChange = (keys: Key[]) => {
    // const latestOpenKey = keys.find(key => openKeys.indexOf(key.toString()) === -1);
    // if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //    dispatch(changeOpenKeys(keys))
    // } else {
    //   dispatch(changeOpenKeys(latestOpenKey ? [latestOpenKey] : []))
    // }
    dispatch(changeOpenKeys(keys));
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={clickMenu}
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    >
      {menuTree.map((item) =>
        item.children ? SubMenuItem(item) : MenuItem(item),
      )}
    </Menu>
  );
};

const MenuItem = (item: MenuOption) => {
  return (
    <Menu.Item key={item.path}>
      <span className="menu-icon"></span>
      <span className="menu-name">{item.name}</span>
    </Menu.Item>
  );
};

const SubMenuItem = (item: MenuOption) => {
  return (
    <SubMenu
      key={item.path}
      title={
        <>
          <span className="menu-icon"></span>
          <span className="menu-name">{item.name}</span>
        </>
      }
    >
      {item.children?.map((i) =>
        i.children && i.children.length ? SubMenuItem(i) : MenuItem(i),
      )}
    </SubMenu>
  );
};
export default index;
