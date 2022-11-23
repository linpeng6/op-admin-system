import { Response } from '@/interface';
import { UpdateLog } from '@/interface/home';
import { MenuOption } from '@/redux/interface';
import request from '@/utils/http/request';

/* 获取菜单列表 */
export const getMenuListApi = () => {
  return request.get<MenuOption[], Response<MenuOption[]>>('/menu');
};

/* 获取更新日志列表 */
export const getUpdateLogListApi = () => {
  return request.get<UpdateLog[], Response<UpdateLog[]>>('/updateLog');
};
