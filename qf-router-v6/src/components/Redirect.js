/*
 * @Author: Topskys
 * @Date: 2022-09-25 21:16:33
 * @LastEditTime: 2022-09-25 21:19:27
 * 重定向2
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirect({ to }) {
    const navigate = useNavigate()
    React.useEffect(() => {
        navigate(to, { replace: true })
    })
    return null
}
