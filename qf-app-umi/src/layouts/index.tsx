/*
 * @Author: Topskys
 * @Date: 2022-09-25 09:48:17
 * @LastEditTime: 2022-09-25 16:12:18
 * 如果有layout文件夹且index.tsx，index.tsx会成为初始主页、根组件
 */
import React from 'react'
import { NavLink } from 'umi'
import './index.less' // umi会解析less文件

export default function IndexLayout(props: any) {
    if (props.location.pathname === "/city" || props.location.pathname.includes("/detail")) {
        return <div>{props.children}</div>
    }
    return (
        <div>
            {/* IndexLayout */}
            {/* slot，用于接收其他文件夹的页面 */}
            {props.children}
            {/* 声明式导航，a标签 */}
            <ul>
                <li><NavLink to="/film" activeClassName='active'>Film</NavLink></li>
                <li><NavLink to="/cinema" activeClassName='active'>Cinema</NavLink></li>
                <li><NavLink to="/center" activeClassName='active'>Center</NavLink></li>
            </ul>

        </div>
    )
}
