/*
 * @Author: Topskys
 * @Date: 2022-09-08 09:46:23
 * @LastEditTime: 2022-09-08 10:15:42
 * 只有类组件采用声明周期，函数式组件可用hooks实现类似周期
 */
import React, { Component } from 'react'

export default class App extends Component {

    state={
        name:'T'
    }

    // 组件将要挂载，运行1次
    componentWillUnmount(){
        // 初始化数据
        // 第一次上树前，最后一次修改状态机会
        this.setState({name:'Y'})
        // 16.2+由于react的diff算法的更新，该生命周期函数将被弃用，不再安全，
        // if需要使用，可如此使用：UNSAFE_componentWillUnmount()，消除警告，
        // 但是该函数优先级会降低，等待所有App周期函数执行完才执行。
    }

    // 组件已经挂载，运行1次
    componentDidMount(){
        // 推荐在此发起数据请求
        // 订阅函数调用
        // setInterval
        // 初始化创建完的DOM
        // Better-Scroll

    }

    // 正在渲染
    render() {
        return (
        <div>App</div>
        )
    }
}
