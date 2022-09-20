/*
 * @Author: Topskys
 * @Date: 2022-09-09 11:34:45
 * @LastEditTime: 2022-09-09 11:35:01
 */

import React, {Component} from 'react';
export default class SwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {
                    this.props.children
                }
            </div>
        )
    }
}