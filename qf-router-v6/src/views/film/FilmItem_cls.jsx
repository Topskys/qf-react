/*
 * @Author: Topskys
 * @Date: 2022-09-26 21:34:08
 * @LastEditTime: 2022-09-26 22:35:33
 */
import React, { Component } from 'react'
import withRouter from '../../components/withRouter.jsx'

class FilmItem extends Component {

    handleToDetail = (id) => {
        // 动态路由 /detail/:id
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        console.log(this.props.a)
        return (
            <li key={this.props.filmId} onClick={() => this.handleToDetail(this.props.filmId)}>
                <img src={this.props.poster} style={{ width: '100px' }} alt={this.props.name} />
                <p>{this.props.name}</p>
            </li>
        )
    }
}


/**
 * 类组件无法用Hooks，需要高阶组件，用于获取props中的某些方法
 * 将FilmItem接收到的{...props} {...item}先传给WithRouter组件，
 * 经过WithRouter整合再发给FilmItem，已解决类组件不能使用Hooks的问题，
 * 通过this.props获取父组件传过来的值。
 */
export default withRouter(FilmItem)