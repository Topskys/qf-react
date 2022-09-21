/*
 * @Author: Topskys
 * @Date: 2022-09-21
 * @LastEditTime: 2022-09-21 17:01:29
 * ForwardRef：引用传递，透传(单个)
 * 在父组件定义ref且把ref放到子组件上(属性)，可以让父组件拿到子组件的ref
 */
import React, { Component, forwardRef } from 'react'

export default class ForwardRef extends Component {
    textRef = React.createRef()
    render() {
        return (
            <div>
                <Child ref={this.textRef} />
                <button onClick={() => {
                    this.textRef.current.focus()
                    this.textRef.current.value = ''
                }}>获取焦点</button>
            </div>
        )
    }
}

const Child = forwardRef((props, ref) => {
    return (
        <div style={{ background: 'gold' }}>
            <input defaultValue='2' ref={ref} />
        </div>
    )
}) 
