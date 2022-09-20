/*
 * @Author: Topskys
 * @Date: 2022-09-06 21:15:01
 * @LastEditTime: 2022-09-06 21:49:27
 * 由于子组件有自己的状态， 导致父组件无法控制子组件， 故子组件已经变成了一个非受控组件，需要把子组件变成受控组件。
 */
import React, { Component } from 'react'

export default class TabBar extends Component {
    state = {
        list: [{
                id: 1,
                txt: "首页"
            },
            {
                id: 2,
                txt: "影院"
            }, {
                id: 3,
                txt: "我的"
            }
        ],
        // current: 0,
        current: this.props.parentCurrent // 让tabbar高亮，第一次能用，因为该类组件执行时，才会重新执行state接收parentCurrent 2
    }

    render() {
        // 让tabbar高亮，会进入死循环：setState-->render()-->setState-->render() 2
        // this.setState({
        //     current:this.props.parentCurrent
        // })

        return (
        <div>
            <ul>
                {
                    this.state.list.map((item,index) => 
                    <li key={item.id} className={this.state.current===index?'active':''}
                    onClick={()=>this.handleClick(index)}>{item.txt}</li>)
                }
            </ul>
        </div>
        )
    }
    handleClick(index) {
        this.setState({
            current: index
        })
        // 通知父组件，并传入current 1
        this.props.myevent(index)
    }
 
}
