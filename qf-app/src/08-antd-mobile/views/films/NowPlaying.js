/*
 * @Author: Topskys
 * @Date: 2022-09-12 14:16:25
 * @LastEditTime: 2022-09-16 13:48:02
 */
import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useHistory,withRouter } from 'react-router-dom' // hooks 路由跳转
import { InfiniteScroll, List,Image } from 'antd-mobile'
import '../css/NowPlaying.css'

export default function NowPlaying(props) {

    const [list, setList] = useState([])
    const [hasMore, setHasMore] = useState(true)

    const count=useRef(0)

    useEffect(() =>{
        axios({
            url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8792318`,
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


    const loadMore=()=>{
        console.log("到底了")
        count.current++
        setHasMore(false)
        axios({
            url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${count.current}&pageSize=10&type=1&k=8792318`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            setList([...list,...res.data.data.films])
            setHasMore(res.data.data.films.length>0)
        })
    }

    return (
        <div>
            <List>
                {
                    list.map(item =>
                        (<List.Item 
                            key={item.filmId} 
                            prefix={
                                <Image src={item.poster}   
                                    width={80} />
                            } 
                            description={
                                <div>
                                    {item.grade?<div>观众平分:{item.grade}</div>:<div style={{visibility: 'hidden'}}>观众平分:</div>}
                                    <div>主演：</div>
                                    <div>{item.nation}|{item.runtime}分钟</div>
                                </div>
                            }>
                                    
                            {item.name}
                        </List.Item>)
                    )
                }
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            <ul>
                {
                    // FilmItem没有props的方法，故从父组件传{...props}或使用withRouter
                    //list.map(item =><FilmItem key={item.filmId} {...item} {...props}/>)
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