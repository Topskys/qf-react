/*
 * @Author: Topskys
 * @Date: 2022-09-05 22:53:32
 */
import React, { Component } from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

export default class App extends Component {
    render() {
        return (
        <div>
            {/* 类组件 */}
            <NavBar title="导航"></NavBar>
            {/* 函数式组件 */}
            <Sidebar bg="gold" position="left"></Sidebar>
        </div>
        )
    }
}
