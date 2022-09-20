/*
 * @Author: Topskys
 * @Date: 2022-09-06 09:01:51
 * @LastEditTime: 2022-09-06 09:16:46
 * @LastEditors: Topskys
 * @Description: 
 */
import React, { Component } from 'react'

export default function Sidebar(props) {
    let {bg,position} = props // 函数式接收props
        return (
            <div style={{backgroundColor:bg,width:'200px'}}>
                <ul>
                    <li>Home</li>
                </ul>
            </div>
        )
}



/**
 * 函数式组件接收props验证
 * 只能用函数属性
 */
// Sidebar.defaultProps = {}
// Sidebar.propTypes = {}
