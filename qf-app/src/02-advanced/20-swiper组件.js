/*
 * @Author: Topskys
 * @Date: 2022-09-09 10:42:36
 * @LastEditTime: 2022-09-09 11:35:30
 */
import React, { Component } from 'react'

import SwiperApp from './swiper/swiper' 
import SwiperItem from './swiper/swiperItem'

import axios from 'axios'

export default class App extends Component {

    state={
        list:[]
    }


    componentDidMount() {
        // setTimeout(() =>{this.setState({list:["13","14","15"]})},0)


        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&k=2042949',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.cfg.film-float.banner'
            }
        }).then(res => {
            let arr=[]
            arr.push(res.data.data)
            this.setState({list:arr})
        })
    }


    render() {
        console.log(this.state.list)
        return (
        <div>
            <SwiperApp loop={true}>
                {
                    this.state.list.map((item)=>{<SwiperItem key={item.bannerId} style={{height:'150px'}}>
                        <img src={item.imgUrl} style={{width: '100%' }}/>
                    </SwiperItem>})
                }
            </SwiperApp>
        </div>
        )
    }
}
