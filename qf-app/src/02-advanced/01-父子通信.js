/*
 * @Author: Topskys
 * @Date: 2022-09-06 20:33:10
 * @LastEditTime: 2022-09-06 21:06:15
 * 这里主要将子传父，父传子已经在前面使用(props)
 */
import React, {
    Component
} from 'react'


class NavBar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'green'}}>
                <h1>NavBar</h1>
                { /* 子传父，回调函数，执行父组件的函数，间接修改父组件的状态：this.props.event() */ }
                <button onClick={()=>this.props.event()}>showSideBar</button>
            </div>
        )
    }
}


class SideBar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'gold',width:'200px'}}>
                <h1>SideBar</h1>
            </div>
        )
    }
}



export default class App extends Component {
    /**
     * 这里面的东西只能在这里面使用
     * 类组件状态不同于组件属性，属性可以在外边使用
     */    
    state={
        showSideBar: false,
    }
    render() {
        return ( 
            <div>
                {/* 子传父，父给子传一个事件回调，在子组件执行父组件的函数，已达到子传父 */}
                <NavBar event={() => {
                    this.setState({showSideBar:!this.state.showSideBar})
                }}></NavBar>
                
                {/* showSideBar控制按钮在同一个组件时 */}
                <button onClick={() =>{this.setState({showSideBar:!this.state.showSideBar})}}>点击</button>
                {this.state.showSideBar &&<SideBar></SideBar>}
            </div>
        )
    }
}