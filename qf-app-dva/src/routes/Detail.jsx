/*
 * @Author: Topskys
 * @Date: 2022-09-24 16:57:38
 * @LastEditTime: 2022-09-24 16:59:29
 */
import React, { Component } from 'react'

export default class Detail extends Component {
    componentDidMount(){
        // console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                Detail--
                {this.props.match.params.id}
            </div>
        )
    }
}
