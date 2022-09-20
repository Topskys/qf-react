/*
 * @Author: Topskys
 * @Date: 2022-09-06 21:26:10
 * @LastEditTime: 2022-09-07 10:27:19
 */
import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'green',display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
                <button onClick={()=>{}}>Back</button>
                <span>卖座</span>
                <button onClick={()=>this.props.myevent()}>Center</button>
            </div>
        )
    }
}
