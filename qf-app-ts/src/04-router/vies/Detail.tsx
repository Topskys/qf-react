/*
 * @Author: Topskys
 * @Date: 2022-09-19 22:20:47
 * @LastEditTime: 2022-09-19 22:28:33
 */
import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IParam {
    filmId: string
}
export default class Detail extends Component<RouteComponentProps<IParam>> {

    componentDidMount() {
        // console.log((this.props.match.params as any).filmId) // 断言 Component<RouteComponentProps>
        // 或
        console.log(this.props.match.params.filmId) // Component<RouteComponentProps<IParam>>

    }
    render() {
        return (
            <div>Detail</div>
        )
    }
}
