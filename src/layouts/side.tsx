import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import { MenuOption } from '@/redux/interface';
interface IMenu {
  menu: MenuOption[];
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
