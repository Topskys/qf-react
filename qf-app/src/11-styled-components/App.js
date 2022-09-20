/*
 * @Author: Topskys
 * @Date: 2022-09-20 15:15:29
 * @LastEditTime: 2022-09-20 15:31:20
 * 样式组件化，带样式的组件，支持sass、less
 * npm i styled-components
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        const StyledFooter = styled.footer`
            background:gold;
            position:fixed;
            bottom:0;
            left:0;
            width:100%;
            height:50px;
            line-height:50px;
            ul{
                display:flex;
                li{
                    flex:1;
                    &:hover{
                        background:red
                    }
                }
            }
        `
        return (
            <StyledFooter>
                <ul>
                    <li>首页</li>
                    <li>列表</li>
                    <li>我的</li>
                </ul>
            </StyledFooter>
        )
    }
}
