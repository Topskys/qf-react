/*
 * @Author: Topskys
 * @Date: 2022-09-12 14:24:48
 * @LastEditTime: 2022-09-12 23:12:25
 * a标签：声明式导航
 * location.hash：#/films // 编程式导航
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from'./TabBar.module.css'

export default class TabBar extends Component {
    render() {
        return (
        <div className={style.tabBar}>
            <ul>
                {/* 声明式导航(写法1)，高亮：window.onhashchange,location.hash */}
                {/* <li><a href="#/films" >电影</a></li>
                <li><a href="#/cinemas" >影院</a></li>
                <li><a href="#/center" >我的</a></li> */}

                {/* 写法2，使用已封装a链接组件 */}
                <li><NavLink to="/films" activeClassName={style.tabBar__active}>电影</NavLink></li>
                <li><NavLink to="/cinemas" activeClassName={style.tabBar__active}>影院</NavLink></li>
                <li><NavLink to="/center" activeClassName={style.tabBar__active}>我的</NavLink></li>
            </ul>
        </div>
        )
    }
}
