/*
 * @Author: Topskys
 * @Date: 2022-09-19 17:33:41
 * @LastEditTime: 2022-09-19 17:46:29
 */


import React, { Component } from 'react'

interface IState {
    name: string
}

// class App extends Component<约定属性, 约定状态>
class App extends Component<any, IState> {

    state = {
        name: 'topskys'
    }


    render() {
        return (
            <div>
                {this.state.name.substring(0, 1).toUpperCase() + this.state.name.substring(1)}
                <button onClick={() => { this.setState({ name: 'lihua' }) }}>修改</button>
            </div>
        )
    }
}


export default App