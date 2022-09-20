/*
 * @Author: Topskys
 * @Date: 2022-09-05 18:49:31
 * betterScroll
 * 平滑滚动
 */
import React, { Component } from 'react'
// 导入better-scroll
// 不能用
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state={
        list: []
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.getData()}}>getData</button>
                <div className = "wrapper" style = {{height: '200px',overflow: 'hidden', backgroundColor: 'gold'}} >
                    <ul className = "content" >
                    {
                        this.state.list.map(item =><li key={item}>{item}</li>)
                    }
                </ul>
                </div>
            </div>
        )
    }

    /**
     * 同步
     * 等待setState() 执行完(DOM)， 再new BetterScroll()
     */    
    getData() {
        this.setState({
            list:Array(40).fill().map((item, i) => item = i)
        },()=>{
            new BetterScroll(".wrapper")
        })

        /**
         * 异步
         */        
        // setTimeout(()=>{
        //     this.setState({
        //         list: Array(40).fill().map((item, i) => item = i)
        //     })
        //     new BetterScroll(".wrapper")
        // },0)
    }

}
