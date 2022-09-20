/*
 * @Author: Topskys
 * @Date: 2022-09-08 22:58:29
 * @LastEditTime: 2022-09-08 23:15:15
 * PureComponent会帮你比较新旧props和新旧state，
 * 决定shouldComponentUpdate返回T或F
 */
import React, { PureComponent } from 'react'

export default class App extends PureComponent {


    state={
        name: 'Topskys'
    }

    render() {
        console.log("Hi render")
        return (
        <div>
            <button onClick={()=>this.setState({name: 'React'})}>click</button>
            {this.state.name}
        </div>
        )
    }


    /**
     * T：应该更新
     * F：阻止更新
     * this.state：老状态
     * nextState：新状态
     * 只能用在组件继承Component时
     */    
    // shouldComponentUpdate(nextProps,nextState) {
    //     if(JSON.stringify(this.state)!==JSON.stringify(nextState)){
    //         return true
    //     }
    //     return false
    // }


    UNSAFE_componentWillUpdate(){
        console.log("UNSAFE_componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
}
