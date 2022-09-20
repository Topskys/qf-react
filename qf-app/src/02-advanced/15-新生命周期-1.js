/*
 * @Author: Topskys
 * @Date: 2022-09-08 14:49:45
 * @LastEditTime: 2022-09-08 14:59:10
 * 新生命周期， 主要是对生命周期的componentWillMount、 componentWillUpdate函数进行替换更新
 * getDerivedStateFromProps
 */
import React, { Component } from 'react'

export default class App extends Component {

    state={
        name: 't'
    }

    /**
     * 代替componentWillMount 初始化
     * dom更新会重复执行
     * static getDerivedStateFromProps 为静态方法，没有this，故不能this.state.name
     */    
    static  getDerivedStateFromProps(nextProps,nextState) {
        return{
            name: 'T',
        }
    }

    render() {
        return (
        <div>App</div>
        )
    }
}
