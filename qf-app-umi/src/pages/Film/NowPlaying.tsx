/*
 * @Author: Topskys
 * @Date: 2022-09-25 09:35:27
 * @LastEditTime: 2022-09-25 10:22:53
 */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'umi'

/**
 * @description: useXxx()：为函数式组件的Hooks写法
 */
export default function NowPlaying(props: any) {
    const [filmList, setFilmList] = useState([])
    const history =useHistory()
    useEffect(() => {
        // 原生 fetch() 有两次.then()
        fetch("https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=9267269", {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => res.json())
            .then((res: any) => {
                // console.log(res)
                setFilmList(res.data.films)
            })
    }, [])
    return (
        <div>
            {
                filmList.map((item: any) =>
                    <li key={item.filmId} onClick={() => {
                        // props.history.push(item.filmId)
                        history.push(`/detail/${item.filmId}`)
                    }}>
                        <img src={item.poster} style={{ width: '100px' }} alt={item.name} />
                        <p>{item.name}</p>
                    </li>
                )
            }
        </div>
    )
}
