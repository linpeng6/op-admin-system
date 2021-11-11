import actionTypes from '../action/actionTypes';
import { MenuState, MenuActionType } from '../interface';
const initState: MenuState = {
  menuTree: [], // 菜单树
  menuList: [], // 菜单平铺结构
  tabMenus: [], // 标签页列表
  selectedKey: '/',
  openKeys: [], // 当前展开的 SubMenu 菜单项 key 数组
};

export default (state = initState, action: MenuActionType) => {
  switch (action.type) {
    // 菜单
    case actionTypes.UPDATE_MENU_LIST:
      return {
        ...state,
        ...action.value,
      };
    // 标签页
    case actionTypes.UPDATE_TAB_MENU:
      return {
        ...state,
        tabMenus: action.value,
      };
    // 选中菜单
    case actionTypes.UPDATE_SELECT_KEY:
      return {
        ...state,
        selectedKey: action.value,
      };
    // 路由
    case actionTypes.UPDATE_ROUTE:
      return {
        ...state,
        ...action.value,
      };
    // 展开菜单
    case actionTypes.CHANGE_OPEN_KEYS:
      return {
        ...state,
        openKeys: action.value,
      };
    default:
      return state;
  }
};
