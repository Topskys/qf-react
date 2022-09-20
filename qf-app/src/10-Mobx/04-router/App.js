/*
 * @Author: Topskys
 * @Date: 2022-09-11 16:51:36
 * @LastEditTime: 2022-09-19 08:39:40
 * 默认模板快捷键：rcc/rfc
 * 路由版本5
 * location.hash：将会拿到#/router
 */
import React, {
    Component
} from 'react'

// 引入组件
import MRouter from './router/index'
import TabBar from './components/TabBar'

// 引入全局样式
import './views/css/App.css'
// 
// import store from './mobx/store'
import {
    autorun
} from 'mobx'

// 利用context包装，构建一个 父组件 ---- 高阶组件mobx-react
import {
    inject,
    observer
} from 'mobx-react'


@inject("store") // <Provider store = {store } >将store注入
@observer // 高阶组件，从父组件(observer)将store传入该组件
class App extends Component {

    // mobx-react可以不需要，注释掉
    // state = {
    //     showTabBar: false,
    // }

    // store.subscribe 订阅

    componentDidMount() {
        // 自己监听
        // autorun(() => {
        //     // console.log(store.showTabBar)
        //     this.setState({
        //         showTabBar: store.showTabBar
        //     })
        // })

        // mobx-react自动监听，直接在DOM使用this.props.store.showTabBar
    }

    render() {
        
        return ( <div>
                <MRouter> 
                    {
                        // this.state.showTabBar && <MRouter TabBar / >
                        this.props.store.showTabBar && <TabBar/>
                    } 
                </MRouter> 
            </div >
        )
    }
}


export default App