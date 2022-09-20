/*
 * @Author: Topskys
 * @Date: 2022-09-08 10:22:32
 * @LastEditTime: 2022-09-08 11:35:26
 */
import React, { Component } from 'react'


class Box extends Component {
    shouldComponentUpdate(nextProps) {
        if(this.props.current===this.props.index||nextProps.current===nextProps.index){
            return true
        }
        return false
    }

    /**
     * @description: 父传子，子组件可以拿到最新的值，再做一些js逻辑处理，like ： ajax
     * @param {*} nextProps
     * @return {*}
     */    
    componentWillReceiveProps(nextProps) {
        console.log("old:",this.props.current) // 拿到的是老的current
        console.log("new:", nextProps.current) // 最新的值 
    }

    render() {
        console.log("render")
        return (
            <div style={{width:'100px', height:'100px',border:this.props.current===this.props.index?'1px solid red':'1px solid gray',margin:"10px",float:'left'}}>{this.props.children}</div>
        )
    }
}



export default class App extends Component {

    state={
        txt:'1',
        list: Array(10).fill().map((item, i) =>'0'+ (item = i).toFixed(0)),
        current:0,
    }
    render() {
        return (
            <div>
                < input type = "number"
                onChange = {
                    (e) => this.setState({
                        current: Number(e.target.value)
                    })
                }
                value={this.state.current}
                />

                <div style={{overflow:'hidden'}}>
                    {
                        this.state.list.map((item, i) => 
                        <Box key={item} current={this.state.current} index={i}>{item}</Box>)
                    }
                </div>


                {/* <span>{this.state.txt}</span>
                <button onClick={()=>this.setState({txt:'2'})}>update</button> */}
            </div>
        )
    }

    /**
     * 快捷键：scu
     * @description: 是否执行更新周期，避免状态相同而频繁触发更新周期，优化性能
     * @param {*} prevProps
     * @param {*} prevState
     * @param {*} nextProps
     * @param {*} nextState
     * @return {*}
     */
    // shouldComponentUpdate(prevProps,prevState,nextProps,nextState) {
    //     // 老状态不等于新状态返回true，就执行下面两个更新周期
    //     if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
    //         return true
    //     }
    //     return false
    // }

    componentWillUpdate(){
        console.log("将更新")
    }

    /**
     * @description: 
     * @param {*} prevProps
     * @param {老的状态} prevState
     * @return {*}
     */    
    componentDidUpdate(prevProps,prevState) {
        // prevState.list.length===0 && new BetterScroll("#wrapper") 
        console.log("更新")
    }
}
