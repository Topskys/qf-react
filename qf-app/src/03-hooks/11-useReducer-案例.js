/*
 * @Author: Topskys
 * @Date: 2022-09-11 13:51:08
 * @LastEditTime: 2022-09-11 14:09:19
 */
import React, { Component,useState,useEffect,useContext,useReducer } from 'react'

import axios from 'axios'

import './css/02-communication.css'


// 创建context对象
const GlobalContext = React.createContext()


const initState={
    info:'',
    filmList:[],
}



const reducer=(prevState,action)=>{
    var newState={...prevState}
    switch(action.type){
        case "change-filmList":
            newState.filmList = action.value
            return newState
            case "change-info":
            newState.info = action.value
            return newState
            default:
                return prevState
    }
}

/**
 * 受控组件，电影列表
 * dispatch修改将会触发useReducer之后触发整个函数再执行
 */
function FilmItem(props){
    let {name,poster,grade,synopsis}=props
    const {dispatch} = useContext(GlobalContext)
    return <div  style = {{float: 'left', width: '200px'}}
                            onClick = {
                                () => dispatch({
                                    type: 'change-info',
                                    value: synopsis
                                })
                            } >
                                <img src={poster}/>
                                <h4>{name}</h4>
                                <p>观众平分：{grade?grade:0}</p>
                            </div>
}






/**
 * 受控组件，显示电影详情
 */
function FilmDetail(){
    const {state} = useContext(GlobalContext)

    return (<div className="filmDetail">{state.info}</div>)
}







export default function App() {


    const [state,dispatch] =useReducer(reducer,initState)

    useEffect(() =>{
axios({
                        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3775329',
                        method: 'GET',
                            headers: {
                                // , "bc": "440300"
                                'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785"}',
                                'X-Host': 'mall.film-ticket.film.list'
                            }
                    }).then(res => {
                        dispatch({
                            type: "change-filmList",
                            value: res.data.data.films
                        })
                    })
    },[])

    return (
                        // 供应商
                        <GlobalContext.Provider value={{
                            state,dispatch
                        }}>
                            <div>
                                {state.filmList.map(item =>
                                <FilmItem key={item.filmId} {...item} 
                                >
                                </FilmItem>)}

                                <FilmDetail></FilmDetail>
                            </div>
                        </GlobalContext.Provider>

                    )
}





