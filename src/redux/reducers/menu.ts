import actionTypes from '../action/actionTypes';
import { MenuState, MenuActionType } from '../interface';
const initState: MenuState = {
  menuTree: [], //菜单树
  menuList: [], //菜单平铺结构
  tabMenus: [],
  selectedKey: '',
};

export default (state = initState, action: MenuActionType) => {
  switch (action.type) {
    case actionTypes.UPDATE_MENU_LIST:
      return {
        ...state,
        ...action.value,
      };
    case actionTypes.UPDATE_TAB_MENU:
      return {
        ...state,
        tabMenus: action.value,
      };
    case actionTypes.UPDATE_SELECT_KEY:
      return {
        ...state,
        selectedKey: action.value,
      };
    case actionTypes.UPDATE_ROUTE:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};
