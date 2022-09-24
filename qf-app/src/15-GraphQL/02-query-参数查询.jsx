/*
 * @Author: Topskys
 * @Date: 2022-09-23 21:06:47
 * @LastEditTime: 2022-09-23 21:18:19
 */
import React, { Component } from 'react'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
    url: '/graphql'// http://localhost:3000/graphql
})

/**
 * @description: Graphql，单个查询
 * @return {*}
 * 安装
 * npm i react-apollo apollo-boost graphql graphql-tag
 * GraphQL：聚合多个接口，帅选需要的资源，具有增删改查功能，类似APIJSON
 * 后台：server/05-db.js
 */
export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <QueryGraphql />
                </div>
            </ApolloProvider>
        )
    }
}


class QueryGraphql extends Component {
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
        id: "632d96f02f70f15c1ca55e04"
    }
    render() {
        return <div>
            <input type="text" onChange={(e) => { this.setState({ id: e.target.value }); }} />
            <Query query={this.query} variables={{ id: this.state.id }}>
                {
                    ({ loading, data }) => {
                        console.log(loading);
                        return loading ? <b>loading...</b> : <div>
                            {
                                data.getNowPlayingList.map(item =>
                                    <div key={item.id}>
                                        <div>名字：{item.name}</div>
                                        <div>价格：{item.price}</div>
                                    </div>)
                            }
                        </div>
                    }
                }
            </Query>
        </div >
    }
}