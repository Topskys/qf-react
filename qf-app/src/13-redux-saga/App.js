/*
 * @Author: Topskys
 * @Date: 2022-09-20 22:07:55
 * @LastEditTime: 2022-09-21 10:42:35
 * redux-saga用于处理异步，全局监听器和接收器使用Generator函数和saga自身的一些辅助函数实现整个流程的管控。
 * npm i redux-saga
*/
import React, { Component } from 'react'
import store from './redux/store'

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    if (store.getState().list1.length === 0) {
                        store.dispatch({ type: 'get-list1' })
                    } else {
                        console.log("缓存1", store.getState().list1)
                    }
                }}>ajax-异步缓存1</button>
                <button onClick={() => {
                    if (store.getState().list2.length === 0) {
                        store.dispatch({ type: 'get-list2' })
                    } else {
                        console.log("缓存2", store.getState().list2)
                    }
                }}>ajax-异步缓存2</button>
            </div>
        )
    }
}
