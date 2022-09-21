/**
 * @description: 单元测试，只需运行测试用例就知道程序是否有问题
 * 测试包
 * npm i react-test-renderer
 */
import React, { Component } from 'react'

export default class App extends Component {
    state={
        text:'',
        list:["13","14","15"]
    }
    render() {
        return (
            <div>
                <h1>单元测试</h1>
                <input onChange={(e) => { this.setState({ text: e.target.value}) }}/>
                <button className="add" onClick={() => this.setState({ list: [...this.state.list, this.state.text] })}>add</button>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={item}>
                            {item}
                            <button className="del" onClick={() =>{
                                var newList=[...this.state.list]
                                newList.splice(index, 1)
                                this.setState({
                                    list:newList
                                })
                            }}>del</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
