/*
 * @Author: Topskys
 * @Date: 2022-09-25 10:25:06
 * @LastEditTime: 2022-09-25 10:30:37
 * 动态路由
 * 配置：detail文件夹新建文件命名为[filmId].tsx
 * 取用：props.match.params.filmId / useParams()
 */
import React from 'react'
import { useParams } from 'umi'


interface IParams {
    filmId: string,
}

export default function Detail(props: any) {
    const params = useParams<IParams>() // props.match.params.filmId
    return (
        <div>
            Detail--{params.filmId}
        </div>
    )
}
