/*
 * @Author: Topskys
 * @Date: 2022-09-06 09:24:22
 */
import React, { Component } from 'react'

export default class App extends Component {
    inputRef=React.createRef()
    render() {
        return (
        <div>
            <h1>登录页</h1>
            {/* 非受控 input value 属性没有被控制，if加了value={val}，则input为受控*/}
            <input type="text" ref={this.inputRef} defaultValue="最初默认值"/>
            <button onClick={()=>{console.log()}}>登录</button>
            <button onClick={()=>{console.log()}}>重置</button>

            {/* inputRef值改变，input标签会重新渲染，而不会重新执行render()，故Child只会接收到一次name */}
            <Child name={this.inputRef.current.value}></Child>
        </div>
        )
    }
}
