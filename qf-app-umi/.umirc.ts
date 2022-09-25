/*
 * @Author: Topskys
 * @Date: 2022-09-24 23:32:22
 * @LastEditTime: 2022-09-25 19:38:38
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 注释掉会调用，.umi自动添加pages的页面路由
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},

  // 配置路由模式，umi自动重启
  history: {
    type: 'hash'
  },

  // 反向代理
  proxy: {
    "/api": {
      target: "https://i.maoyan.com",
      changeOrigin: true,
    }
  },

  // 关闭原始antd-mobile@2.3版本，就会使用自己安装的最新版本
  // cnpm install --save antd-mobile
  antd: {
    mobile: false,
  },
  dva: {
    // 自定义配置
  }



});
