/*
 * @Author: Topskys
 * @Date: 2022-09-11 14:17:11
 * @LastEditTime: 2022-09-11 16:38:14
 * 自定义hooks，抽出js逻辑
 * 按F11退出vscode全屏
 */
import React,{useState,useEffect,useMemo} from 'react'
import axios from 'axios'


/**
 * 抽出来的js逻辑函数名必须已use开头，否则无法使用hooks，like：useState等
 */
function useCinemaList() {

    const [cinemaList,setCinemaList]= useState([])

    useEffect(() =>{
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=8825245',
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res)
            setCinemaList(res.data.data.cinemas)
        })
    },[])

    return{
        cinemaList
    }
}

/**
 * 使用filter做模糊查询
 */
function useFilter(cinemaList,text){

    const getCinemaList = useMemo(() => cinemaList.filter(item => 
        item.name.toUpperCase().includes(text.toUpperCase()) ||
        item.address.toUpperCase().includes(text.toUpperCase())
    ), [cinemaList, text])
    
    return{
        getCinemaList
    }
}

export default function App() {
    const [text, setText]= useState("")

    const {cinemaList} = useCinemaList()

    const {getCinemaList} = useFilter(cinemaList,text)
    
    return (
        <div>
            <input value={text} onChange={(e) =>{setText(e.target.value)}}/>
            
                {
                    getCinemaList.map(item => <dl key = {item.cinemaId} >
                        <dt>{item.name}</dt>
                        <dt>{item.address}</dt>
                    </dl>)
                }
        </div>
    )
}
