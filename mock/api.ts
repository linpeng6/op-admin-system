export default {
  '/api/menu': {
    code: 1,
    data: [
      { path: '/', name: '首页', icon: 'HomeOutlined', key: 'home' },
      {
        path: '/comp',
        name: '组件',
        icon: 'BlockOutlined',
        key: 'comp',
        children: [
          {
            path: '/comp/table',
            name: '表格',
            icon: 'TableOutlined',
            key: 'table',
          },
          {
            path: '/comp/date',
            name: '日期',
            icon: 'CalendarOutlined',
            key: 'date',
          },
        ],
      },
      {
        path: '/drag',
        name: '拖拽',
        icon: 'DragOutlined',
        key: 'drag',
        children: [
          {
            path: '/drag/html-draggable',
            name: 'Draggable属性',
            icon: '',
            key: 'html-draggable',
          },
        ],
      },
      {
        path: '/excel',
        name: 'Excel',
        icon: 'FileExcelOutlined',
        key: 'excel',
        children: [
          {
            path: '/excel/export-excel',
            name: '导出Excel',
            icon: '',
            key: 'export-excel',
          },
          {
            path: '/excel/import-excel',
            name: '导入Excel',
            icon: '',
            key: 'export-excel',
          },
        ],
      },
      {
        path: '/system',
        name: '系统管理',
        icon: 'SettingOutlined',
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
