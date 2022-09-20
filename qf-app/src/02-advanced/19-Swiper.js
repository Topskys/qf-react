/*
 * @Author: Topskys
 * @Date: 2022-09-08 23:19:14
 * @LastEditTime: 2022-09-08 23:57:13
 */
import React, { Component } from 'react'
import Swiper,{Navigation,Pagination} from 'swiper'
import 'swiper/css'
// import 'swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination])

export default class App extends Component {

    state={
        list:["13","14","15"]
    }


    // 同步，list不为空，本地数据
    // componentDidMount(){
    //     new Swiper(".swiper", {
    //         // 分液器
    //         pagination: {
    //             el: '.swiper-pagination',
    //         }
    //     })
    // }



    // 异步，list为空
    componentDidMount(){
        setTimeout(() =>{
            this.setState({list:["13","14","15"]})
            new Swiper(".swiper", {
                // 分液器
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        },0) 
    }

    // 异步 或
    // componentDidUpdate(){
    //     new Swiper(".swiper", {
    //         // 分液器
    //         pagination: {
    //             el: '.swiper-pagination',
    //         }
    //     })
    // }



    render() {
        return (
            <div>
                <div className="swiper" style={{height:'150px',backgroundColor:'gold'}}>
                    <div className="swiper-wrapper">
                        {this.state.list.map((item) =><div className="swiper-slide">{item}</div>)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
