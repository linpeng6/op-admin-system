import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
interface IMenu {
  menu: Array<IMenuItem>;
}

interface IMenuItem {
  name: string;
  key: string;
  path: string;
  children?: Array<any>;
}

const { SubMenu } = Menu;

const index: React.FC<IMenu> = (props) => {
  const { menu } = props;

  const clickMenu = ({ key }: any) => {
    history.push(key);
  };

  return (
    <Menu theme="dark" mode="inline" onClick={clickMenu}>
      {menu.map((item) => (item.children ? SubMenuItem(item) : MenuItem(item)))}
    </Menu>
  );
};

const MenuItem = (item: IMenuItem) => {
  return (
    <Menu.Item key={item.path}>
      <span className="menuIcon"></span>
      <span className="menuName">{item.name}</span>
    </Menu.Item>
  );
};

const SubMenuItem = (item: IMenuItem) => {
  return (
    <SubMenu
      key={item.path}
      title={
        <>
          <span className="menuIcon"></span>
          <span className="menuName">{item.name}</span>
        </>
      }
    >
      {item.children &&
        item.children.map((i) =>
          i.children && i.children.length ? SubMenuItem(i) : MenuItem(i),
        )}
    </SubMenu>
  );
};
export default index;
