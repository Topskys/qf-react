/*
 * @Author: Topskys
 * @Date: 2022-09-08 14:49:45
 * @LastEditTime: 2022-09-08 20:16:14
 * 新生命周期， 主要是对生命周期的componentWillMount、 componentWillUpdate函数进行替换更新，两种周期函数不能共存
 * getSnapshotBeforeUpdate
 * 保持当前看到邮件1的位置，邮件数组来新邮件，先前看到邮件1的位置不变
 */
import React, { Component } from 'react'

export default class App extends Component {

    state={
        name: '111',
        list:Array(10).fill().map((item, i) => item = i)
    }

    /**
     * 代替componentWillMount 初始化
     * dom更新会重复执行
     * static getDerivedStateFromProps 为静态方法，没有this，故不能this.state.name
     */    
    static  getDerivedStateFromProps(nextProps,nextState) {
        return{
            name: 'T',
        }
    }


    /**
     * 取代componentWillUpdate，用于记录DOM状态
     * dom更新会重复执行
     */    
    getSnapshotBeforeUpdate() {
        // 获取更新前容器高度
        return this.ulRef.current.scrollHeight // value
    }


    /**
     * @param {更新前容器高度} value
     */    
    componentDidUpdate(prevProps, prevState,value) {
        this.ulRef.current.scrollTop +=this.ulRef.current.scrollHeight-value;
    }


    ulRef=React.createRef()

    render() {
        return (
        <div>
            <button onClick={()=>this.setState({list:[...[11,12,13,14,15,16,17,18,19,20],...this.state.list]})}>来邮件</button>
            <h1>邮箱应用</h1>
            <div style={{ height:'200px',overflow:'auto',backgroundColor:'gold' }} ref={this.ulRef}>
            <ul>
                {this.state.list.map(item=><li key={item} style={{ height:'50px' }}>{item}</li>)}
            </ul>
        </div>
        </div>
        )
    }
}
