/*
 * @Author: Topskys
 * @Date: 2022-09-09 10:35:09
 * @LastEditTime: 2022-09-09 11:34:53
 */
import React, { Component } from 'react'
import Swiper,{Navigation,Pagination} from 'swiper'
import 'swiper/css'
// import 'swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination])

export default class SwiperApp extends Component {

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
    // componentDidMount(){
    //     setTimeout(() =>{
    //         this.setState({list:["13","14","15"]})
    //         new Swiper(".swiper", {
    //             // 分液器
    //             pagination: {
    //                 el: '.swiper-pagination',
    //             }
    //         })
    //     },0) 
    // }

    // 异步 或
    componentDidUpdate(){
        new Swiper(".swiper", {
            // 分液器
            pagination: {
                el: '.swiper-pagination',
            },
            loop: this.props.loop,
        })
    }



    render() {
        return (
            <div>
                <div className="swiper" style={{height:'150px'}}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}





