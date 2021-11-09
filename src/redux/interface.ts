export interface RootState {
  menu: MenuState;
}

// menu
export interface MenuState {
  tabMenus: MenuItem[];
  selectedKey: string;
}

export interface MenuItem {
  name: string;
  path: string;
}
