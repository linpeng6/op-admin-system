import request from '@/utils/http/request';

export const getMenuListApi = () => {
  return request({
    url: '/menu',
    method: 'GET',
  });
};
