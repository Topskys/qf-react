/*
 * @Author: Topskys
 * @Date: 2022-09-12 14:16:25
 * @LastEditTime: 2022-09-12 18:12:29
 */
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory,withRouter } from 'react-router-dom' // hooks 路由跳转

export default function NowPlaying(props) {

    const [list, setList] = useState([])

    useEffect(() =>{
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8792318',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            setList(res.data.data.films)
        })
    },[])


    const history = useHistory()

    const handleDetail=(filmId)=>{
        // 编程式导航，原生js，方法1
        // window.location.href="#/detail/"+filmId
        
        // 编程式导航，方法2
        // props.history.push(`/detail/${filmId}`);

        // 编程式导航，方法3
        // 动态路由传参
        history.push(`/detail/${filmId}`)

        // 路由传参，方式2-发
        // history.push({pathname:`/detail`,query:{filmId:filmId}})

    }

    return (
        <div>
            <ul>
                {
                    // FilmItem没有props的方法，故从父组件传{...props}或使用withRouter
                    list.map(item =><FilmItem key={item.filmId} {...item} {...props}/>)
                        // <li key={item.filmId} onClick={() => handleDetail(item.filmId)}>
                        //     {item.name}
                        //     {/* 声明式导航 */}
                        //     {/* <NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink> */}
                        // </li>)
                }
            </ul>
        </div>
    )
}


function FilmItem(props) {
    let {name,filmId} = props
    return <li onClick={()=>{props.history.push(`/detail/${filmId}`)}}>{name}</li>
}


/**
 * if组件没有props，使用withRouter将其参数做为子组件，隔空给组件(FilmItem)提供props属性和方法
 * 使用：<WidthFilmItem></WidthFilmItem>
 */
const WidthFilmItem = withRouter(FilmItem)