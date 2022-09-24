/*
 * @Author: Topskys
 * @Date: 2022-09-24 17:03:18
 * @LastEditTime: 2022-09-24 17:19:40
 */
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    localStorage.setItem('token', "token")
                    this.props.history.push("/center")
                }}>登录</button>
            </div>
        )
    }
}
