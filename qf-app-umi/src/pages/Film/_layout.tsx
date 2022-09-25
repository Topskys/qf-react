/*
 * @Author: Topskys
 * @Date: 2022-09-25 09:35:12
 * @LastEditTime: 2022-09-25 09:46:37
 * 嵌套路由，需要新建film文件夹和_layout.tsx
 */
import React from 'react'
import { useLocation, Redirect } from 'umi'

export default function FilmIndex(props: any) {
    const location = useLocation()
    if (location.pathname === "/film" || location.pathname === "/film/") {// props.location.pathname === '/film'
        return <Redirect to="/film/nowPlaying" />
    }
    return (
        <div>
            <div style={{ height: '150px', background: 'gold' }}></div>
            {props.children}
        </div>
    )
}
