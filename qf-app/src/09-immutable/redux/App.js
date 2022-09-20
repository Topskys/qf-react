/*
 * @Author: Topskys
 * @Date: 2022-09-11 16:51:36
 * @LastEditTime: 2022-09-17 15:08:51
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


// 引入redux
import store from './redux/store'

export default class App extends Component {

    state={
        showTabBar: store.getState().TabBarReducer.get("showTabBar"), // .showTabBar
    }

    componentDidMount(){
        // store.subscribe 订阅
        store.subscribe(() => {
            this.setState({
                showTabBar: store.getState().TabBarReducer.get("showTabBar") // .showTabBar
            })
        })
    }
    
    render() {
        return (
        <div>
            <MRouter>
                {
                    this.state.showTabBar && <TabBar></TabBar>
                }
            </MRouter>
        </div>
        )
    }
}
