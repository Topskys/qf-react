/*
 * @Author: Topskys
 * @Date: 2022-09-25 20:51:45
 * @LastEditTime: 2022-09-26 21:03:39
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Center() {
    const navigate = useNavigate()
    return (
        <div>
            Center
            <button onClick={() => {
                localStorage.removeItem('token')
                navigate("/login")
            }}>退出登录</button>
        </div>
    )
}
