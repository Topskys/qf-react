/*
 * @Author: Topskys
 * @Date: 2022-09-19 20:29:07
 * @LastEditTime: 2022-09-19 20:34:20
 */
import React, { Component } from 'react'

export default class Parent extends Component {
    render() {
        return (
            <div>Parent
                <Child name="child-01" />
            </div>
        )
    }
}


/**
 * @description: 用于检查属性名和值是否错误
 */
interface IProps {
    name: string
}
// Component<约定属性, 约定状态>
class Child extends Component<IProps, any> {
    render() {
        return (
            <div>Child</div>
        )
    }
}

