/*
 * @Author: Topskys
 * @Date: 2022-09-19 21:40:23
 * @LastEditTime: 2022-09-19 22:22:27
 */
import React, { Component } from 'react'
// npm i axios，声明文件已经在axios包
import axios from 'axios'

// TS为静态语言，代码没有执行父组件就不能传props，所以会报错
// interface IProps {
//     history: any,
// }
import { RouteComponentProps } from 'react-router-dom'

interface IItem {
    filmId: number,
    name: string,
    [propName: string]: any,
}

export default class Film extends Component<RouteComponentProps, any> {// IProps

    state = {
        list: []
    }

    componentDidMount() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8792318',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then((res) => {
            this.setState({
                list: res.data.data.films
            })
        })
    }

    handleDetail = (filmId: any) => {
        // 编程式导航，原生js，方法1
        // window.location.href="#/detail/"+filmId

        // 编程式导航，方法2
        // props.history.push(`/detail/${filmId}`);

    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item: IItem) =>
                            <li key={item.filmId} onClick={() => this.props.history.push(`/detail${item.filmId}`)}>
                                {item.name}
                                {/* 声明式导航 */}
                                {/* <NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink> */}
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}
