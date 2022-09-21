/*
 * @Author: Topskys
 * @Date: 2022-09-21 15:52:34
 * @LastEditTime: 2022-09-21 16:08:02
 */
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class PortalDialog extends Component {
    render() {
        return createPortal(
            <div style={{
                width: '100%', height: '100%',
                position: 'fixed', left: '0', top: '0',
                background: 'rgba(0,0,0,0.7)'
            }}>
                {/* 遮罩层 */}
                PortalDialog......
                <button onClick={this.props.onClose}>Close</button>
                {/* slot */}
                {this.props.children}
            </div>
            , document.body
        )
    }
}
