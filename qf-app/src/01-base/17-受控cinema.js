/*
 * @Author: Topskys
 * @Date: 2022-09-06
 * 受控--推荐，组件可共用state数据
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor(){
        super()
        
        this.state = {
            input:'',
            cinemaList: [],
        }

        /**
         * 异步
         * 临时在此发请求，后面有更合适发请求的周期
         */        
        axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=8825245',
        method: 'GET',
        headers:{
            'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
            'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            this.setState({
                cinemaList: res.data.data.cinemas
            })
        })
    }
    
    

    render() { 
        return (
            <div>
                {/* input受控，value跟状态input同步，setState数据变化，重绘render() */}
                <input value={this.state.input} onChange={(e) =>this.setState({ input: e.target.value})}/>
                    {
                        this.getCinemaList().map(item =>
                            <dl key={item.cinemaId}>
                                <dt>{item.name}</dt>
                                <dd>{item.address}</dd>
                            </dl>
                        )
                    }
                
            </div>
        )
    }


    getCinemaList(){
        return this.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.state.input.toUpperCase()) || item.address.toUpperCase().includes(this.state.input.toUpperCase()))
    }
}
