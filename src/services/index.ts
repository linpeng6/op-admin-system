import request from '../utils/request';

export const getMenuListApi = () => {
  return request({
    url: '/menu',
    method: 'GET',
  });
};
