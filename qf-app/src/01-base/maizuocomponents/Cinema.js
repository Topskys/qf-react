/*
 * @Author: Topskys
 * @Date: 2022-09-05 15:39:26
 * 
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor(){
        super()
        
        this.state = {
            cinemaList: [],
            backUpCinemaList: [],// 备份数组
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
                cinemaList: res.data.data.cinemas,
                backUpCinemaList: res.data.data.cinemas
            })
        })
    }
    
    

    render() { // 数据改变会频繁触发render()，故不合适在此函数发请求
        return (
            <div>
                <input onInput={this.handleInput}/>
                    {
                        this.state.cinemaList.map(item =>
                            <dl key={item.cinemaId}>
                                <dt>{item.name}</dt>
                                <dd>{item.address}</dd>
                            </dl>
                        )
                    }
                
            </div>
        )
    }

    /**
     * 监听输入
     * 使用箭头函数解决this指向类App问题
     */    
    handleInput=(e)=>{
        /**
         * 过滤，模糊查询
         * filter()
         * 返回过滤数组，不影响原数组
         */         
        var nList = this.state.backUpCinemaList.filter(item =>
            item.name.toUpperCase().includes(e.target.value.toUpperCase()) || 
            item.address.toUpperCase().includes(e.target.value.toUpperCase())
        )
        /**
         * 同步
         * setState处于同步的地方， 不能直接访问setState最新的值， 此时setState() 是异步更新数据， 不会阻塞(线程)其他代码执行， 等其他代码执行完后才执行。
         * setState处于异步的地方，可直接访问最新的状态。
         */        
        this.setState({
            cinemaList: nList
        })

        /**
         * 异步
            this.setState({
                cinemaList: nList
            }, () => {
                console.log("最新数据：", this.state.cinemaList)
            })
        */        

    }
}
