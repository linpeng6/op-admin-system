import React from 'react';

export interface RootState {
  menu: MenuState;
}

export type RootAction = MenuActionType;
// menu
export interface MenuState {
  menuTree: MenuOption[];
  menuList: MenuOption[];
  tabMenus: MenuItem[];
  selectedKey: string;
  openKeys: string[];
}
export interface MenuActionType {
  type: string;
  value?: any;
}

export interface MenuOption {
  path: string;
  name: string;
  icon?: any;
  key?: string;
  children?: MenuOption[];
}
export interface MenuItem {
  name: string;
  path: string;
}
