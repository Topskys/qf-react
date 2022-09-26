/*
 * @Author: Topskys
 * @Date: 2022-09-26 20:31:11
 * @LastEditTime: 2022-09-26 21:29:57
 */
import React from 'react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'


export default function Detail() {

    // console.log(window.location.href)
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.get("id")) // 获取参数 /detail?id=3056

    // 动态路由，获取参数
    const params = useParams()
    // console.log(params.id) 
    const navigate = useNavigate()

    return (
        <div>
            Detail
            <button onClick={() => {
                // 跳到另一个详情中
                // setSearchParams({ id: 1000 })

                navigate("/detail/1000") // 动态路由
            }}>猜你喜欢</button>
        </div>
    )
}
