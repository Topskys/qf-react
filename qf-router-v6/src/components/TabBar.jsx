/*
 * @Author: Topskys
 * @Date: 2022-09-26 10:17:51
 * @LastEditTime: 2022-09-26 10:55:48
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './TabBar.module.css'

export default function TabBar() {
    return (
        <footer className={style.TabBar}>
            <ul>
                {/* react-router-dom@6移除classNameActive，用className的回调函数决定高亮 */}
                <li><NavLink to="/film" className={({ isActive }) => isActive ? `${style.TabBarActive}` : ""}>电影</NavLink></li>
                <li><NavLink to="/cinema" className={({ isActive }) => isActive ? `${style.TabBarActive}` : ""}>影院</NavLink></li>
                <li><NavLink to="/center" className={({ isActive }) => isActive ? `${style.TabBarActive}` : ""}>我的</NavLink></li>
            </ul>
        </footer>
    )
}
