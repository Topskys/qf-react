/*
 * @Author: Topskys
 * @Date: 2022-09-06 21:26:10
 * @LastEditTime: 2022-09-06 21:42:31
 */
import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'green',display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
                <button onClick={this.props.myevent()}>Back</button>
                <span>首页</span>
                <button>Confirm</button>
            </div>
        )
    }
}
