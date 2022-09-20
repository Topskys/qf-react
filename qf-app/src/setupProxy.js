/*
 * @Author: Topskys
 * @Date: 2022-09-12 18:31:18
 * @LastEditTime: 2022-09-12 20:41:23
 * 反向代理服务
 */
const {
    createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://i.maoyan.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
}