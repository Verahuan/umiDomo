import { defineConfig } from 'umi';

// 配置文件，包含 umi 内置功能和插件的配置
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/',
      component: '@/pages/index',
    },
    {
      path:"/ToDoList",component:"@/pages/ToDoList"
    }
  ],
});
