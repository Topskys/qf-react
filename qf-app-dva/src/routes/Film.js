/*
 * @Author: Topskys
 * @Date: 2022-09-24 16:12:40
 * @LastEditTime: 2022-09-24 16:58:56
 */
import React, { Component } from 'react'
import request from '../utils/request'

export default class Film extends Component {
    state = {
        list: [],
    }
    componentDidMount() {
        request("https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2232595", {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }

        }).then(res => this.setState({ list: res.data.data.films }))
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item.filmId} onClick={() => this.props.history.push(`/detail/${item.filmId}`)}>
                                <img src={item.poster} style={{ width: '100px' }} />
                                <p>{item.name}</p>
                            </li>)
                    }
                </ul>

            </div>
        )
    }
}
