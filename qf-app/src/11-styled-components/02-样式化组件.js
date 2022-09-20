/*
 * @Author: Topskys
 * @Date: 2022-09-20 15:38:33
 * @LastEditTime: 2022-09-20 15:44:47
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        // 样式化Child组件，把样式传给Child，通过props.className接收
        // 原理：高阶组件
        const StyledChild = styled(Child)`
            background:gold;
            color:red;
        `
        return (
            <div>
                <StyledChild />
            </div>
        )
    }
}


function Child(props) {
    return (
        <div className={props.className}>child</div>
    )
}