import actionTypes from '../action/actionTypes';

const initState = {
  tabMenus: [
    {
      path: '/comp/table',
      name: '表格组件',
    },
    {
      path: '/system/user',
      name: '用户',
    },
  ],
  selectedKey: '/comp/table',
};

export default (state = initState, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_TAB_MENU:
      return null;
    case actionTypes.UPDATE_SELECT_KEY:
      return {
        ...state,
        selectedKey: action.value,
      };
    default:
      return state;
  }
};
