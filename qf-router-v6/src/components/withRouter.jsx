/*
 * @Author: Topskys
 * @Date: 2022-09-26 21:38:43
 * @LastEditTime: 2022-09-26 22:31:34
 * 高阶组件，自己封装WithRouter()
 */
import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

export default function withRouter(Component) {
    return function (props) {
        const push = useNavigate()
        const match = useParams()
        const location = useLocation()
        return <Component a="干爹组件" {...props} history={{ push, match, location }} />
    }
}
