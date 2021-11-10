import actionTypes from './actionTypes';
import { MenuItem, MenuOption } from '../interface';
import store from '../store';
// change menuList
export const changeMenuList = (
  menuTree: MenuOption[],
  menuFlattenList: any[],
) => ({
  type: actionTypes.UPDATE_MENU_LIST,
  value: {
    menuTree,
    menuList: menuFlattenList,
  },
});
// change selectKey
export const changeSelectKey = (value: string) => ({
  type: actionTypes.UPDATE_SELECT_KEY,
  value,
});

// change tabMenu
export const changeTabMenus = (value: MenuItem[]) => ({
  type: actionTypes.UPDATE_TAB_MENU,
  value,
});

// change Route
export const changeRoute = (
  pathname: string,
  dispatch: React.Dispatch<any>,
) => {
  const { tabMenus, menuList } = store.getState().menu;
  const existMenu = tabMenus.find(
    (item) => item.path === pathname && item.name,
  );
  if (!existMenu) {
    // select match menuItem from menuList
    const menuItem = menuList.find((item) => item.path === pathname);
    if (menuItem) {
      tabMenus.push({ path: pathname, name: menuItem.name });
    }
    dispatch(changeTabMenus([...tabMenus]));
  }
  return {
    type: actionTypes.UPDATE_ROUTE,
    value: {
      selectedKey: pathname,
    },
  };
};
