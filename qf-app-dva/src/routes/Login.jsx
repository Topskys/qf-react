/*
 * @Author: Topskys
 * @Date: 2022-09-24 17:03:18
 * @LastEditTime: 2022-09-24 23:05:36
 */
import React, { Component } from 'react'
import request from '../utils/request'

export default class Login extends Component {
    usernameRef = React.createRef()
    passwordRef = React.createRef()
    render() {
        return (
            <div>
                username:<input type="text" ref={this.usernameRef} /><br />
                password:<input type="password" ref={this.passwordRef} /><br />
                <button onClick={() => {
                    // 利用mock作模拟请求
                    request("/users/login", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.usernameRef.current.value,
                            password: this.passwordRef.current.value
                        })
                    }).then((res) => {
                        console.log(res.data)
                        if (res.data.ok) {
                            localStorage.setItem('token', res.data.token)
                            this.props.history.push("/center")
                        } else {
                            alert("username or password is incorrect")
                        }

                    })

                }}>登录</button>
            </div>
        )
    }
}
