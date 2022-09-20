/*
 * @Author: Topskys
 * @Date: 2022-09-07 10:39:35
 * @LastEditTime: 2022-09-07 15:30:56
 */
import React, { Component } from 'react'


class Field extends Component {

    state={
        value:'',
    }
    /**
     * 清空input，内部调用
     */
    clear(){
        this.setState({value:''})
    }

    /**
     * 初始化input，外部调用
     */    
    setDefaultValue(value){
        this.setState({value:value})
    }

    render(){
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} 
                onChange={(e)=>{this.setState({value: e.target.value})}} 
                value={this.state.value}/>
            </div>
        )
    }
}

export default class App extends Component {

    user = React.createRef()
    password = React.createRef()


    render() {
        return (
            <div>
                <h1>login</h1>
                <Field label="user" type="text" ref={this.user}></Field>
                <Field label="secret" type="password" ref={this.password} ></Field>
                <button type="submit" onClick={()=>{this.user.current.state.value,this.password.current.state.value}}>login</button>
                <button onClick={()=>{this.user.current.clear(),this.password.current.clear()}}>cancel</button>
            </div>
        )
    }
}
