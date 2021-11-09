import { defineConfig } from 'umi';
import { resolve } from 'path';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 约定式路由取消此配置
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  alias: {
    '@root': resolve('./'),
    '@': resolve(__dirname, './src'),
    '@comp': resolve(__dirname, './src/components'),
    '@img': resolve(__dirname, './src/assets/images'),
  },
});
