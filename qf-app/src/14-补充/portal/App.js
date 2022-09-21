/*
 * @Author: Topskys
 * @Date: 2022-09-21 15:29:09
 * @LastEditTime: 2022-09-21 16:15:53
 * Portals提供了一个最好的在父组件包含的DOM结构层级外的DOM节点渲染组件的方法，
 * 将在root里面的组件拿到root外边渲染。
 * 由于类似Dialog遮罩层的z-index受到父组件的z-index的影响，遮罩层盖不全整个视窗，所以需要将Dialog拿到root外边渲染。
 * ReactDOM.createPortal(child,container)
 * PortalDialog虽然放到root的外边，但是事件冒泡任然存在console.log("container身上监听的事件，事件冒泡")
 */
import React, { Component } from 'react'
import './App.css'
import PortalDialog from './components/PortalDialog'

export default class App extends Component {
    state = {
        isShow: false,
    }
    render() {
        return (
            <div className="container" onClick={() => console.log("container身上监听的事件，事件冒泡")}>
                <div className="left"></div>
                <div className="right">
                    <button onClick={() => { this.setState({ isShow: true }) }}>open PortalDialog</button>
                    {
                        this.state.isShow && <PortalDialog onClose={() => {
                            this.setState({ isShow: false })
                        }}>
                            <mark><b>slot-123456</b></mark>
                        </PortalDialog>
                    }
                </div>
            </div>
        )
    }
}
