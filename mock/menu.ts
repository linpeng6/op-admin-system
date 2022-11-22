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
          {
            path: '/drag/react-dnd',
            name: 'react-dnd',
            icon: '',
            key: 'react-dnd',
          },
          {
            path: '/drag/trello',
            name: 'trello',
            icon: '',
            key: 'trello',
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
        path: '/pdf',
        name: 'Pdf',
        icon: 'FilePdfOutlined',
        key: 'pdf',
      },
      {
        path: '/css',
        name: 'CSS',
        icon: 'StarOutlined',
        key: 'css',
        children: [
          { path: '/css/typing', name: '打字效果', icon: '', key: 'typing' },
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
