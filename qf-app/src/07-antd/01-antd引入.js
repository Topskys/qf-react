/*
 * @Author: Topskys
 * @Date: 2022-09-14 21:54:56
 * @LastEditTime: 2022-09-14 22:05:00
 * antd组件库
 * npm install antd--save
 */


import React, { Component } from 'react'

// 引入antd及全局样式
import { Button } from 'antd';


export default class App extends Component {
    render() {
        return (
            <div>
                <div><Button  type="primary" onClick={()=>{console.log("Hello antd")}} loading={true}>01-antd引入</Button></div>
            </div>
        )
    }
}

