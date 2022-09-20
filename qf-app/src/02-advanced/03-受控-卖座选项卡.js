/*
 * @Author: Topskys
 * @Date: 2022-09-05 15:16:18
 * 11 - 卖座选项卡
 * 非受控子组件，可能会进入死循环
 */
import React, { Component } from 'react'
import './css/01-index.css'

// 引入组件
import Film from './maizuocomponents2/Film'
import Cinema from './maizuocomponents2/Cinema'
import Center from './maizuocomponents2/Center'
import TabBar from './maizuocomponents2/TabBar'
import NavBar from './maizuocomponents2/NavBar'

export default class App extends Component {

    state={
        current:0,
        list: [{
                id: 1,
                txt: "首页"
            },
            {
                id: 2,
                txt: "影院"
            },
            {
                id: 3,
                txt: "我的"
            },
        ]
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
            {/* 高亮，通知tabbar切换到center组件 */}
            <NavBar myevent={()=>{this.setState({current:2})}}></NavBar>

            {
                this.tabBar()
            }

            {/* 子传父，参数i用于接收子传父的数据；父传子，current让选项卡高亮，list */}
            <TabBar myevent={(i)=>{this.setState({current:i})}} current={this.state.current} list={this.state.list}></TabBar>
        </div>
        )
    }

}
