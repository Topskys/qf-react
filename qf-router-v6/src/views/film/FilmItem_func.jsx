/*
 * @Author: Topskys
 * @Date: 2022-09-26 21:21:44
 * @LastEditTime: 2022-09-26 21:32:47
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'


/**
 * @description: FilmItem
 * @param {" filmList.map((item) => <FilmItem key={item.filmId} {...item} />"} item
 * @return {*}
 */
function FilmItem(item) {

    const navigate = useNavigate()

    const handleToDetail = (id) => {
        // query ：URL传参，/detail?id=3056
        // 路由传参：/detail/3056

        // navigate(`/detail?id=${id}`) // /detail

        // 动态路由 /detail/:id
        navigate(`/detail/${id}`) // props.history.push(`/detail/${id}`)
    }

    return (
        <li key={item.filmId} onClick={() => handleToDetail(item.filmId)}>
            <img src={item.poster} style={{ width: '100px' }} alt={item.name} />
            <p>{item.name}</p>
        </li>
    )
}


// 在路由v6版本FilmItem不需要干爹组件(高阶组件)(withRouter()/connect()等) 才能拿到props
export default FilmItem