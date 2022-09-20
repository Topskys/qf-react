/*
 * @Author: Topskys
 * @Date: 2022-09-05 22:20:17 
 */
import React, { Component } from 'react'

import NavBar from './NavBar'

export default class App extends Component {
    render() {
        var obj={
            title: "列表",
            showLeft:false,
            showRight:true,
        }
        return (
            <div>
                <div>
                {/* 父传子，在子组件调用：this.props */}
                    <NavBar title="首页" showLeft={true} ></NavBar>
                </div>
                <div>
                    {/* <NavBar title={obj.title} ></NavBar> */}
                    <NavBar {...obj} ></NavBar>
                </div>
            </div>
        )
    }
}
