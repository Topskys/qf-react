/*
 * @Author: Topskys
 * @Date: 2022-09-12 18:31:18
 * @LastEditTime: 2022-09-23 21:04:34
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

    // Graphql
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
}