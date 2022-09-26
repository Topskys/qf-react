/*
 * @Author: Topskys
 * @Date: 2022-09-26 20:57:00
 * @LastEditTime: 2022-09-26 21:28:16
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const usernameRef = React.createRef()
    return (
        <div>
            <h1>Login</h1>
            <input ref={usernameRef} type="text" />
            <button onClick={() => {
                localStorage.setItem('token', usernameRef.current.value)
                navigate("/center")
            }}>登录</button>
        </div>
    )
}
