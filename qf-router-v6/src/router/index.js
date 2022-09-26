/*
 * @Author: Topskys
 * @Date: 2022-09-25 21:03:17
 * @LastEditTime: 2022-09-26 10:13:23
 */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Redirect from '../components/Redirect'// 重定向2
import NotFound from '../views/NotFound'
import Search from '../views/Search'
import NowPlaying from '../views/film/NowPlaying'
import ComingSoon from '../views/film/ComingSoon'

export default function MRouter() {
    return (
        <Routes>
            {/* <Route path="/" element={<Film />} /> like index */}
            {/* <Route index element={<Film />} /> */}
            <Route path="/film" element={<Film />} >
                {/* 嵌套路由 */}
                {/* <Route index element={<NowPlaying />} /> */}
                {/* <Route path="" element={<Redirect to="/film/nowPlaying" />} /> */}
                <Route index element={<Redirect to="/film/nowPlaying" />} />
                <Route path="nowPlaying" element={<NowPlaying />} />
                <Route path="comingSoon" element={<ComingSoon />} />
            </Route>
            <Route path="/cinema" element={<Cinema />} />
            <Route path="/center" element={<Center />} />
            <Route path="/cinema/search" element={<Search />} />

            {/* 重定向1 */}
            {/* <Route path="*" element={<Navigate to="/film" />} /> */}
            {/* <Route path="*" element={<Redirect to="/film" />} /> */}
            <Route path="/" element={<Redirect to="/film" />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}


/**
 * @description: <Route index element={<NowPlaying />} />中的index：
 * index用于嵌套路由，仅匹配父路径时，设置渲染的组件。
 * 解决当嵌套路由有多个子路由但本身无法确认默认渲染哪个子路由的时候，可以增加index属性来指定默认路由。
 * index路由和其他路由不同的地方是它没有path属性，他和父路由共享同一个路径。
 */
