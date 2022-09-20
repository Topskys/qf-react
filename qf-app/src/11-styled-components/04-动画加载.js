/*
 * @Author: Topskys
 * @Date: 2022-09-20 15:50:55
 * @LastEditTime: 2022-09-20 15:56:21
 */
import React, { Component } from 'react'
import styled, { keyframes} from 'styled-components'

export default class App extends Component {
    render() {
        const myanimation = keyframes`
            from{
                transform:rotate(0deg);
            }
            to{
                transform:rotate(360deg);
            }
        `
        const StyleDiv = styled.div`
            width: 100px;
            height:100px;
            background:gold;
            animation:${myanimation} 2s infinite;
        `
        return (
            <div>
                <StyleDiv />
            </div>
        )
    }
}
