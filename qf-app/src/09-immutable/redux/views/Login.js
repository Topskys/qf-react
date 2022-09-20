/*
 * @Author: Topskys
 * @Date: 2022-09-12 16:12:08
 * @LastEditTime: 2022-09-12 16:18:17
 */
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                login
                <button onClick={()=>{
                    localStorage.setItem('token',"123456")
                    this.props.history.push('/center')}
                }>center</button>
            </div>
        )
    }
}
