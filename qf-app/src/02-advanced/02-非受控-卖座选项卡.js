/*
 * @Author: Topskys
 * @Date: 2022-09-05 15:16:18
 * 11 - 卖座选项卡
 * 非受控子组件，可能会进入死循环
 */
import React, { Component } from 'react'
import './css/01-index.css'

// 引入组件
import Film from './maizuocomponents/Film'
import Cinema from './maizuocomponents/Cinema'
import Center from './maizuocomponents/Center'
import TabBar from './maizuocomponents/TabBar'
import NavBar from './maizuocomponents/NavBar'

export default class App extends Component {

    state={
        current:0,
    }

    /**
     * 底部tabBar处理函数
     */    
    tabBar(){
        switch(this.state.current){
            case 0:
                return <Film> </Film>
                case 1:
                    return <Cinema></Cinema>
                    case 2:
                        return <Center></Center>
        }
    }

    render() {
        return (
        <div>
            {/* <NavBar myevent={()=>{this.setState({current:2})}}></NavBar> */}
            {
                this.tabBar()
            }

            {/* 子传父，参数i用于接收子传父的数据；parentCurrent让选项卡高亮？不行 */}
            {/* <TabBar myevent={(i)=>{this.setState({current:i})}} parentCurrent={this.state.current}></TabBar> */}
            <TabBar myevent={(i)=>{this.setState({current:i})}} ></TabBar>
        </div>
        )
    }

}
