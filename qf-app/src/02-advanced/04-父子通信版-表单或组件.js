/*
 * @Author: Topskys
 * @Date: 2022-09-07 10:39:35
 * @LastEditTime: 2022-09-07 11:00:27
 */
import React, { Component } from 'react'


class Field extends Component {
    render(){
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(e)=>{this.props.onChangeEvent(e.target.value)}} value={this.props.value}/>
            </div>
        )
    }
}

export default class App extends Component {

    state={
        user:'123456',// localStorage.getItem('user')
        password:'123456',
    }

    render() {
        return (
            <div>
                <h1>login</h1>
                <Field label="user" type="text" onChangeEvent={(value)=>{this.setState({user: value})}} value={this.state.user}></Field>
                <Field label="secret" type="password"  onChangeEvent={(value)=>{this.setState({password:value})}} value={this.state.password}></Field>
                <button type="submit" onClick={()=>console.log(this.state.user,this.state.password)}>login</button>
                <button onClick={()=>this.setState({user:'',password:""})}>cancel</button>
            </div>
        )
    }
}
