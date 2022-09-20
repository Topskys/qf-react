/*
 * @Author: Topskys
 * @Date: 2022-09-12 14:24:48
 * @LastEditTime: 2022-09-16 00:04:14
 * a标签：声明式导航
 * location.hash：#/films // 编程式导航
 */
import React, { Component } from 'react'
import { NavLink,withRouter } from 'react-router-dom'
import style from'./TabBar.module.css'
import {TabBar} from 'antd-mobile'
import {
    AppOutline,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'

class TabBarApp extends Component {

    tabs = [{
            key: '/films',
            title: '电影',
            icon: < AppOutline / > ,
        },
        {
            key: '/cinemas',
            title: '影院',
            icon: < UnorderedListOutline / > ,
        },
        {
            key: '/center',
            title: '我的',
            icon: < UserOutline / > ,
        },
    ]
    
    render() {
        return (
        <div className={style.tabBar}>
            {/* <ul> */}
                {/* 声明式导航(写法1)，高亮：window.onhashchange,location.hash */}
                {/* <li><a href="#/films" >电影</a></li>
                <li><a href="#/cinemas" >影院</a></li>
                <li><a href="#/center" >我的</a></li> */}

                {/* 写法2，使用已封装a链接组件 */}
                {/* <li><NavLink to="/films" activeClassName={style.tabBar__active}>电影</NavLink></li>
                <li><NavLink to="/cinemas" activeClassName={style.tabBar__active}>影院</NavLink></li>
                <li><NavLink to="/center" activeClassName={style.tabBar__active}>我的</NavLink></li>
            </ul> */}

            <TabBar  onChange = {
                (value) => {
                    this.props.history.push(value)
                }
            }
            activeKey = {
                "/"+this.props.location.pathname.split('/')[1]
            } >
            {this.tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
            </TabBar>
        </div>
        )
    }
}

{/* 高阶组件 */}
export default withRouter(TabBarApp)