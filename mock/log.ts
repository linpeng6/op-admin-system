import type { UpdateLog } from '@/interface/home';

const data: UpdateLog[] = [
  {
    content: '初始化项目',
    time: '2021-11-09',
  },
  {
    content: '搭建项目主体框架',
    time: '2021-12-30',
  },
  {
    content:
      '听说，世间所有的相遇都是久别重逢。时隔六年,再次相见,依旧美丽动人。',
    time: '2022-10-05',
  },
];

export default {
  '/api/updateLog': {
    code: 1,
    data,
    message: '',
  },
};
