export default {
  '/api/menu': {
    code: 200,
    data: [
      { path: '/', name: '首页', icon: '', key: 'home' },
      {
        path: '/comp',
        name: '组件',
        icon: '',
        key: 'comp',
        children: [
          { path: '/comp/table', name: '表格', icon: '', key: 'table' },
          { path: '/comp/date', name: '日期', icon: '', key: 'date' },
        ],
      },
      {
        path: '/system',
        name: '系统管理',
        icon: '',
        key: 'system',
        children: [
          { path: '/system/user', name: '用户管理', icon: '', key: 'user' },
          { path: '/system/menu', name: '菜单管理', icon: '', key: 'menu' },
        ],
      },
    ],
    message: '',
  },
};
