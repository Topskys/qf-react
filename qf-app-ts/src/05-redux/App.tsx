/*
 * @Author: Topskys
 * @Date: 2022-09-19 21:28:39
 * @LastEditTime: 2022-09-20 09:03:50
 * 路由
 * npm i react-router-dom@5
 */
import React, { Component } from 'react'

import IndexRouter from './router/index'// 引入路由组件
import store from './redux/store'// redux


export default class App extends Component {
    state = {
        isShow: store.getState().isShow
    }
    componentDidMount() {
        // 订阅
        store.subscribe(() => {
            // console.log(store.getState().isShow)
            this.setState({ isShow: store.getState().isShow })
        })
    }
    render() {
        return (
            <div>
                <IndexRouter />
                {
                    this.state.isShow && <ul>
                        <li>电影</li>
                        <li>影院</li>
                        <li>我的</li>
                    </ul>
                }
            </div>
        )
    }
}
