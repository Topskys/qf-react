/*
 * @Author: Topskys
 * @Date: 2022-09-21 16:35:28
 * @LastEditTime: 2022-09-21 16:52:36
 */
import React, { Component } from 'react'

export default class App extends Component {
    textEl = null // 临时
    render() {
        return (
            <div>
                <Child callback={(el) => { this.textEl = el }} />
                <button onClick={() => {
                    this.textEl.current.focus()
                    this.textEl.current.value = ''
                }}>获取焦点</button>
            </div>
        )
    }
}

class Child extends Component {
    textRef = React.createRef()
    componentDidMount() {
        this.props.callback(this.textRef)
    }

    render() {
        return (
            <div style={{ background: 'gold' }}>
                <input defaultValue='gold' ref={this.textRef} />
            </div>
        )
    }
}