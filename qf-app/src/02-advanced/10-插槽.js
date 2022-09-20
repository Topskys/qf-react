/*
 * @Author: Topskys
 * @Date: 2022-09-07 23:30:56
 * @LastEditTime: 2022-09-08 09:41:27
 * 插槽，方便复用，一定程度减少父子通信
 */
import React, { Component } from 'react'


class Child extends Component {
    render() {
        return(
            <div>
                {/* 插槽，接收在Child标签中间的dom，vue中slot ；*/}
                {this.props.children[0]}
                {this.props.children[1]} 
                {this.props.children[2]}
            </div>
        )
    }
}

/**
 * 留插槽式组件，复用
 */
class Swiper extends Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    {/* like：插槽类似用属性给子组件传值 */}
                    <div>Child已经设置插槽，这个div才有效果0</div>
                    <div>Child已经设置插槽，这个div才有效果1，这可以直接读取到父组件的状态</div>
                    <div>Child已经设置插槽，这个div才有效果2</div>
                    {
                        // children
                    }
                </Child>
            </div>
        )
    }
}
