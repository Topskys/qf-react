/*
 * @Author: Topskys
 * @Date: 2022-09-08 14:34:30
 * @LastEditTime: 2022-09-08 14:46:57
 */
import React, { Component } from 'react'

export default class App extends Component {


    state={
        isCreated: true,
    }


    render() {
        return (
            <div>
                <button onClick={()=>this.setState({isCreated: !this.state.isCreated})}>showChild</button>
                {this.state.isCreated && <Child></Child>}
            </div>
        )
    }
}

class Child extends Component {

    componentDidMount() {
        window.onresize = () => {
            console.log('resize')
        }

        /**
         * 将定时器挂载到this上，方便销毁函数clear
         */        
        this.timer=setInterval(() => {
            console.log('timer')
        },5000)
    }


    render() {
        return (
            <div>child</div>
        )
    }


    /**
     * 销毁
     */    
    componentWillUnmount(){
        window.onresize=null // 销毁事件
        clearInterval(this.timer) // 销毁定时器
        console.log('xiaohui')
    }

    
}