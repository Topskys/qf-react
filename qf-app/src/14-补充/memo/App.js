/*
 * @Author: Topskys
 * @Date: 2022-09-21 17:04:28
 * @LastEditTime: 2022-09-21 20:53:48
 * Functional Component缓，存为啥起memo这个名字?
 * 在计算机领域，记忆化是一种主要用来提升计算机程序速度的优化技术方案。
 * 它将开销较大的函数调用的返回结果存储起来，当同样的输入再次发生时，
 * 则返回缓存好的数据，以此提升运算效率。
 * 作用
 * 组件仅在它的props 发生改变的时候进行重新渲染。通常来说，在组件树中React 组件，
 * 只要有变化就会走一遍渲染流程。但是React.memo()，我们可以仅仅让某些组件进行渲染。
 * 与PureComponent区别？
 * pureComponent只能用于class 组件，memo用于functional组件
 * 用法
 * import {memo} from 'react'
 * const child = memo(()=>{return <div><input type="text"/></div>})
 */
import React, { Component, memo } from 'react'

export default class App extends Component {
    state = {
        name: 'lihua',
        title: 'memo'
    }
    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={() => { this.setState({ name: "xiaoming" }) }}>click</button>
                <button onClick={() => { this.setState({ title: "updateMemo" }) }}>memo</button>
                <Child title={this.state.title} />
            </div>
        )
    }
}

/**
 * @description: 由于this.setState({ name: "xiaoming" })，就会重复执行整个App，子组件也会被重新渲染，消耗性能
 */
// function Child() {
//     console.log("Child x1")
//     return <div>child</div>
// }

// 解决memo()
const Child = memo((props) => {
    console.log("Child-memo x1")
    return <div>child-{props.title}</div>
}) 