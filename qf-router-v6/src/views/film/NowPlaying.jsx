/*
 * @Author: Topskys
 * @Date: 2022-09-26 10:01:43
 * @LastEditTime: 2022-09-26 21:47:49
 */
import React, { useEffect, useState } from 'react'
import axios from 'axios' // npm i axios
import { useNavigate } from 'react-router-dom'
import FilmItem from './FilmItem_cls'

export default function NowPlaying(props) {
    const [filmList, setFilmList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        // axios 数据在res.data中
        axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=9267269",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            setFilmList(res.data.data.films)
        })
    }, [])// [参数]：参数变化会重新执行

    // 放到FilmItem组件处理
    // const handleToDetail = (id) => {
    //     // query ：URL传参，/detail?id=3056
    //     // 路由传参：/detail/3056

    //     // navigate(`/detail?id=${id}`) // /detail

    //     // 动态路由 /detail/:id
    //     navigate(`/detail/${id}`) // props.history.push(`/detail/${id}`)
    // }

    return (
        <div>
            {
                filmList.map((item) => <FilmItem key={item.filmId} {...item} />
                    // <li key={item.filmId} onClick={() => handleToDetail(item.filmId)}>
                    //     <img src={item.poster} style={{ width: '100px' }} alt={item.name} />
                    //     <p>{item.name}</p>
                    // </li>
                )
            }
        </div>
    )
}
