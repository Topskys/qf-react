/*
 * @Author: Topskys
 * @Date: 2022-09-07 21:07:44
 * @LastEditTime: 2022-09-07 21:32:22
 * 非父子通信，发布订阅模式
 * 核心思想： 发布者---> 公众平台 <--- 订阅者， 使用callback()
 */
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// 公众平台，调度中心
var bus={

    list:[],
    // 订阅者调用方法
    subscribe(callback) {
        this.list.push(callback)
    },

    // 发布者调用方法
    publish(val) {
        this.list.forEach(item => item && item(val))
    }
}

bus.subscribe((val) => {
    console.log('订阅', val)
})

bus.publish(() => {
    console.log('发布')
    return "fafafa"
})