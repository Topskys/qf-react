/*
 * @Author: Topskys
 * @Date: 2022-09-11 16:51:36
 * @LastEditTime: 2022-09-14 15:49:15
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
// 使用react-redux不需要单独引入store
// import store from './redux/store'


import {connect} from 'react-redux'

class App extends Component {

    // state={
    //     showTabBar: store.getState().TabBarReducer.showTabBar,
    // }

    // componentDidMount(){
    //     // store.subscribe 订阅
    //     store.subscribe(() => {
    //         this.setState({
    //             showTabBar: store.getState().TabBarReducer.showTabBar
    //         })
    //     })
    // }
    
    render() {
        return (
        <div>
            <MRouter>
                {
                    // this.state.showTabBar && <TabBar></TabBar>
                    this.props.showTabBar && <TabBar></TabBar>
                }
            </MRouter>
        </div>
        )
    }
}


// react-redux
// 高阶组件connect()
const mapStateToProps = (state) => {
    return {
        hello: "给(App)传hello属性",
        showTabBar: state.TabBarReducer.showTabBar
    }
}

export default connect(mapStateToProps)(App)