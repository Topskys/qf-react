/*
 * @Author: Topskys
 * @Date: 2022-09-20 15:45:34
 * @LastEditTime: 2022-09-20 15:49:31
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        const StyledButton = styled.button`
            width: 100px;
            height:50px;
            background:gold;
        `
        // 样式继承
        const StyledButton2 = styled(StyledButton)`
            background:red;
        `
        return (
            <div>
                <StyledButton></StyledButton>
                <StyledButton2></StyledButton2>
            </div>
        )
    }
}
