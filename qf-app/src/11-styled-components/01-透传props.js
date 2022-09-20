/*
 * @Author: Topskys
 * @Date: 2022-09-20 15:26:21
 * @LastEditTime: 2022-09-20 15:36:16
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        const StyledInput = styled.input`
            outline:none;
            border-radius:5px;
            border-bottom:1px solid reg
        `
        const StyledDiv = styled.div`
            background:${props => props.bg || 'gold'};
            width:100px;
            height:100px;
        `
        return (
            <div>
                <StyledInput type="text" placeholder="输入" />
                {/* 透传props */}
                <StyledDiv bg="red"></StyledDiv>
            </div>
        )
    }
}
