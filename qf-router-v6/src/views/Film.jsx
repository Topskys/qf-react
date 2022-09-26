/*
 * @Author: Topskys
 * @Date: 2022-09-25 20:51:12
 * @LastEditTime: 2022-09-26 10:57:51
 */
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import style from './Film.module.css'

export default function Film() {
    return (
        <div className={style.Film}>
            <div style={{ height: '150px', backgroundColor: 'gold' }}>大轮播</div>
            <ul>
                <li><NavLink to="/film/nowPlaying" className={({ isActive }) => isActive ? `${style.FilmActive}` : ""}>正在热映</NavLink></li>
                <li><NavLink to="/film/comingSoon" className={({ isActive }) => isActive ? `${style.FilmActive}` : ""}>即将上映</NavLink></li>
            </ul>
            {/* 路由容器，路由显示位，类似vue的<routerView/> */}
            <Outlet></Outlet>
        </div>
    )
}
