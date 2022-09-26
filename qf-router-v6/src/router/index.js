/*
 * @Author: Topskys
 * @Date: 2022-09-25 21:03:17
 * @LastEditTime: 2022-09-26 22:59:24
 */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Film from '../views/Film'
// import Cinema from '../views/Cinema'
// import Center from '../views/Center'
import Redirect from '../components/Redirect'// 重定向2
// import NotFound from '../views/NotFound'
// import Search from '../views/Search'
// import NowPlaying from '../views/film/NowPlaying'
// import ComingSoon from '../views/film/ComingSoon'
// import Detail from '../views/Detail'
// import Login from '../views/Login'



export default function MRouter() {
    return (
        <Routes>
            {/* <Route path="/" element={<Film />} /> like index */}
            {/* <Route index element={<Film />} /> */}
            <Route path="/film" element={LazyLoad("Film")} >
                {/* 嵌套路由 */}
                {/* <Route index element={<NowPlaying />} /> */}
                {/* <Route path="" element={<Redirect to="/film/nowPlaying" />} /> */}
                <Route index element={<Redirect to="/film/nowPlaying" />} />
                <Route path="nowPlaying" element={LazyLoad("film/NowPlaying")} />
                <Route path="comingSoon" element={LazyLoad("film/ComingSoon")} />
            </Route>
            <Route path="/cinema" element={LazyLoad("Cinema")} />
            {/* 该三目运算符只走一次，所以不能用 */}
            {/* <Route path="/center" element={ isAuth()?<Center/>:<Redirect to="/login"/>} /> */}
            <Route path="/center" element={<Auth>
                {/* react-router@6之前用render(()=>{}) */}
                {/* < Center /> */}
                {LazyLoad("Center")}
            </Auth>} />
            <Route path="/cinema/search" element={LazyLoad("Search")} />
            {/* <Route path="/detail" element={<Detail />} /> */}
            {/* 动态路由 */}
            <Route path="/detail/:id" element={LazyLoad("Detail")} />
            <Route path="/login" element={LazyLoad("Login")} />

            {/* 重定向1 */}
            {/* <Route path="*" element={<Navigate to="/film" />} /> */}
            {/* <Route path="*" element={<Redirect to="/film" />} /> */}
            <Route path="/" element={<Redirect to="/film" />} />
            <Route path="*" element={LazyLoad("NotFound")} />

        </Routes>
    )
}


/**
 * @description: <Route index element={<NowPlaying />} />中的index：
 * index用于嵌套路由，仅匹配父路径时，设置渲染的组件。
 * 解决当嵌套路由有多个子路由但本身无法确认默认渲染哪个子路由的时候，可以增加index属性来指定默认路由。
 * index路由和其他路由不同的地方是它没有path属性，他和父路由共享同一个路径。
 */


/**
 * @description: 路由拦截，这里的三目运算只走一次，后面不管isAuth()?返回T或F，
 * 都不会重新渲染<Center/>或<Login/>组件，故该方法不能用。
 * @return {*}
 */
function isAuth() {
    return localStorage.getItem('token')
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