/*
 * @Author: Topskys
 * @Date: 2022-09-04 23:00:18
 * 组件的嵌套
 * 快捷键 rcc 默认初始写法
 */
import React, { Component } from 'react'

class NavBarChild extends Component {
    render(){
        return (<div>NavBarChild</div>)
    }
}

function NavBar(){
    return (<div>navbar<NavBarChild></NavBarChild> </div>)
}

const Swiper=()=><div>swiper</div>

export default class App extends Component {
render() {
    return (
    <div>03-组件的嵌套
        <NavBar></NavBar>
        <Swiper></Swiper>
        <TabBar></TabBar>
    </div>
    )
}
}
