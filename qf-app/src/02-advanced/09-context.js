/*
 * @Author: Topskys
 * @Date: 2022-09-07 15:34:00
 * @LastEditTime: 2022-09-07 23:31:22
 * context，供应商与消费者模式，react已经封装好
 * 核心思想：兄弟组件A，B，
 * 通信： 供应商(电信)， 消费者必须注册供应商的卡， 消费者A提供需求给供应商， 供应商再发给消费者B接收
 */
import React, { Component } from 'react'

import axios from 'axios'

import './css/02-communication.css'

/**
 * 受控组件，电影列表
 */
class FilmItem extends Component {
    render() {
        let {name,poster,grade,synopsis}=this.props
        return (
            <GlobalContext.Consumer>
                {/* GlobalContext.Consumer：插槽 */}
                {
                    // 消费者A，这里必须是callback()
                    (sendService)=>{
                        return <div  style = {{float: 'left', width: '200px'}}
                            onClick = {() => sendService.changeInfo(synopsis)} >
                                <img src={poster}/>
                                <h4>{name}</h4>
                                <p>观众平分：{grade?grade:0}</p>
                            </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}


/**
 * 受控组件，显示电影详情
 */
class FilmDetail extends Component{
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    // 消费者B
                    (useService)=><div className="filmDetail">{useService.info}</div>
                }
            </GlobalContext.Consumer>
            
        )
    }
}

// 创建context对象
const GlobalContext=React.createContext()


export default class App extends Component {

    constructor(){
        super()

        this.state={
            filmList:[],
            info:'',
        }

        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3775329',
            method: 'GET',
                headers: {
                    // , "bc": "440300"
                    'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
        }).then(res => {
            this.setState({
                filmList: res.data.data.films
            })
        })
    }

    render() {
        return (
            // 供应商
            <GlobalContext.Provider value={{
                call: '打电话',
                    online: "上网",
                    info: this.state.info,
                    changeInfo:(value) => {this.setState({info: value})}
            }}>
                <div>
                    {this.state.filmList.map(item =>
                    <FilmItem key={item.filmId} {...item} 
                    onEvent={(value) =>{this.setState({info:value})}}>
                    </FilmItem>)}
                    
                    <FilmDetail></FilmDetail>
                </div>
            </GlobalContext.Provider>
        
        )
    }
}
