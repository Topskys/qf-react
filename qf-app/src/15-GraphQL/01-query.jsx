import React, { Component } from 'react'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
    url: '/graphql'// http://localhost:3000/graphql
})

/**
 * @description: Graphql，查询
 * @return {*}
 * 安装
 * npm i react-apollo apollo-boost graphql graphql-tag
 * GraphQL：聚合多个接口，帅选需要的资源，具有增删改查功能，类似APIJSON
 * 后台：server/04-db.js
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
    query{
        getNowPlayingList {
            id,
            name,
            poster
        }
    }
    `
    render() {
        return <Query query={this.query}>
            {
                ({ loading,data }) => {
                    console.log(loading);
                    return loading ?<b>loading...</b>:<div>
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
    }
}