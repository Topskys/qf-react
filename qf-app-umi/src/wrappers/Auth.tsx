/*
 * @Author: Topskys
 * @Date: 2022-09-25 10:32:25
 * @LastEditTime: 2022-09-25 10:39:30
 * 路由拦截
 * 
 */
import React from 'react'
import { Redirect } from 'umi'

export default function Auth(props: any) {
    if (localStorage.getItem("token")) {
        return <div>{props.children}</div> // 给Center.tsx 子组件的slot
    } else {
        return <Redirect to='/login' />
    }
    return (
        <div>Auth--Center组件登录验证</div>
    )
}
