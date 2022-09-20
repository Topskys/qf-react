/*
 * @Author: Topskys
 * @Date: 2022-09-11 16:51:36
 * @LastEditTime: 2022-09-12 23:15:34
 * 默认模板快捷键：rcc/rfc
 * 路由版本5
 * location.hash：将会拿到#/router
 */
import React, { Component } from 'react'

// 引入组件
import MRouter from './router/index'
import TabBar from './components/TabBar'

// 引入全局样式
import './views/css/App.css'

export default class App extends Component {

    // store.subscribe 订阅
    
    render() {
        return (
        <div>
            <MRouter><TabBar></TabBar></MRouter>
        </div>
        )
    }
}
