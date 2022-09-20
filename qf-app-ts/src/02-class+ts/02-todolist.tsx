import React, { Component } from 'react'
// 限制类型接口
interface IState{
    text: string, 
    list: string[]
}
export default class App extends Component<any,IState> {
    state={
        text: "",
        list:[]
    }
    // TS版的ref需要设定严格类型
    inputRef=React.createRef<HTMLInputElement>()
    render() {
        return (
        <div>
            {/* <input type="text" value={this.state.text} placeholder="请输入"
                onChange={(e)=>{this.setState({text: e.target.value})}}/>
            <button onClick={()=>{console.log(this.state.text)}}>click</button> */}


                {/* ref版、as：断言，否则因为初始值为null会报错 */}
                <input ref={this.inputRef}  placeholder="请输入"/>
                <button onClick={
                () => { 
                    this.setState({ 
                        list: [...this.state.list, (this.inputRef.current as HTMLInputElement).value]
                    }) 
                }}>
                click</button>
                <ul>
                    {
                        this.state.list.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
        </div>
        )
    }
}
