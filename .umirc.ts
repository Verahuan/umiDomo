import { defineConfig } from 'umi';
import Try from "@/pages/try"
// 配置文件，包含 umi 内置功能和插件的配置
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{},
  routes: [
    { path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/list', component: 'Try' }
      ],},
  ],
});
