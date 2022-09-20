/*
 * @Author: Topskys
 * @Date: 2022-09-19 22:20:47
 * @LastEditTime: 2022-09-20 08:55:49
 */
import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import store from '../redux/store'

interface IParam {
    filmId: string
}
export default class Detail extends Component<RouteComponentProps<IParam>> {

    componentDidMount() {
        // console.log((this.props.match.params as any).filmId) // 断言 Component<RouteComponentProps>
        // 或
        // console.log(this.props.match.params.filmId) // Component<RouteComponentProps<IParam>>

        // 修改
        store.dispatch({ type: "hide" })
    }
    componentWillUnmount(): void {
        store.dispatch({ type: "show"})
    }
    render() {
        return (
            <div>Detail</div>
        )
    }
}
