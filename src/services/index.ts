import request from '@/utils/http/request';

/* 获取菜单列表 */
export const getMenuListApi = () => {
  return request({
    url: '/menu',
    method: 'GET',
  });
};

/* 获取更新日志列表 */
export const getUpdateLogListApi = () => {
  return request({
    url: '/updateLog',
    method: 'GET',
  });
};
