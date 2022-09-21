/*
 * @Author: Topskys
 * @Date: 2022-09-21 15:42:09
 * @LastEditTime: 2022-09-21 15:54:08
 */
import React, { Component } from 'react'

export default class Dialog extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', position: 'fixed', left: '0', top: '0', background: 'rgba(0,0,0,0.7)', zIndex: '9999' }}>
                {/* 遮罩层 */}
                Dialog
            </div>
        )
    }
}
