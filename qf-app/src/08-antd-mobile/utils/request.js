/*
 * @Author: Topskys
 * @Date: 2022-09-19 16:36:26
 * @LastEditTime: 2022-09-19 16:41:25
 * 统一请求拦截器
 */
import axios from 'axios'
import { Toast } from 'antd-mobile'


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    Toast.show({
        icon: 'loading',
        content: '加载中…',
        duration:0
    })
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Toast.clear();
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.clear();
    return Promise.reject(error);
});
