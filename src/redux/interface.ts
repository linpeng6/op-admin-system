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
}
export interface MenuActionType {
  type: string;
  value?: any;
}

export interface MenuOption {
  path: string;
  name: string;
  icon?: string;
  key?: string;
  children?: MenuOption[];
}
export interface MenuItem {
  name: string;
  path: string;
}
