/*
 * @Author: Topskys
 * @Date: 2022-09-25 21:03:17
 * @LastEditTime: 2022-09-26 23:24:41
 * 路由useRoutes写法
 */
import React from 'react'
import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect'// 重定向




export default function MRouter() {
    const element = useRoutes([
        {
            path: "/film",
            element: LazyLoad("Film"),
            children: [
                {
                    path: "",
                    element: <Redirect to="/film/nowPlaying" />
                },
                {
                    path: "nowPlaying",
                    element: LazyLoad("film/NowPlaying")
                }, {
                    path: "comingSoon",
                    element: LazyLoad("film/ComingSoon")
                },
            ]
        }, {
            path: "/cinema",
            element: LazyLoad("Cinema")
        }, {
            path: "/center",
            element: <Auth> {LazyLoad("Center")} </Auth>
        }, {
            path: "/login",
            element: LazyLoad("Login")
        }, {
            path: "/detail/:id",
            element: LazyLoad("Detail")
        }, {
            path: "/cinema/search",
            element: LazyLoad("Search")
        },
        {
            path: "/",
            element: <Redirect to="/film" />
        },
        {
            path: "*",
            element: LazyLoad("NotFound")
        },
    ])
    return element
}


/**
 * @description: 修改之后的路由拦截
 * @param {"<Center/>"} children
 * @return {*}
 */
function Auth({ children }) {
    const isLogin = localStorage.getItem('token')
    return isLogin ? children : <Redirect to="/login" />
}


/**
 * @description: 懒加载，组件第一次下载后，会有缓存，再次访问时，就会调用缓存，解决首屏加载慢的问题。
 * @param {路径} path
 * @return {*}
 */
const LazyLoad = (path) => {
    const Comp = React.lazy(() => import(`../views/${path}`))
    return (
        <React.Suspense fallback={<>加载中......</>}>
            <Comp />
        </React.Suspense>
    )
}