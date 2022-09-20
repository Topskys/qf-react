/*
 * @Author: Topskys
 * @Date: 2022-09-06 09:36:03
 */
import React, { Component } from 'react'

export default class App extends Component {

    state={
        username:"T"
    }

    render() {
        return (
        <div>
            <h1>登录页</h1>
            {/* setState()的数据放生变化，重绘render() */}
            <input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
            <button onClick={()=>{console.log()}}>登录</button>
            <button onClick={()=>{console.log()}}>重置</button>
            {/* <Child name={this.state.username}></Child> */}
        </div>
        )
    }
}

