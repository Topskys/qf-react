/*
 * @Author: Topskys
 * @Date: 2022-09-24 08:57:27
 * @LastEditTime: 2022-09-24 09:49:01
 */
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import DeleteGraphql from './DeleteGraphql'
import UpdateGraphql from './UpdateGraphql'

export default class QueryGraphql extends Component {
    query = gql`
    query getNowPlayingList($id:String!){
        getNowPlayingList(id:$id) {
            id,
            name,
            poster,
            price
        }
    }
    `
    state = {
        id: ""
    }
    render() {
        return <div>
            <h4>查询</h4>
            <input type="text" onChange={(e) => { this.setState({ id: e.target.value }); }} placeholder="id" />
            <Query query={this.query} variables={{ id: this.state.id }}>
                {/* Query有缓存，所以需要refetch() */}
                {
                    ({ loading, data, refetch }) => {// 方法，结果，方法
                        this.props.fetch(refetch)// 调用App的fetch并往App传refetch()的参数
                        return loading ? <b>loading...</b> : <div>
                            {
                                data.getNowPlayingList.map(item =>
                                    <div key={item.id} style={{ border: "1px solid gray", padding: "10px" }}>
                                        <div>名字：{item.name}</div>
                                        <div>价格：{item.price}</div>
                                        <div>海报：{item.poster}</div>
                                        <UpdateGraphql id={item.id} cb={() => { refetch() }} />
                                        <DeleteGraphql id={item.id} cb={() => { refetch() }} />
                                    </div>)
                            }
                        </div>
                    }
                }
            </Query>
        </div >
    }
}