/*
 * @Author: Topskys
 * @Date: 2022-09-21 20:55:57
 * @LastEditTime: 2022-09-24 09:49:31
 * GraphQL：聚合多个接口，帅选需要的资源，具有增删改查功能，类似APIJSON
 * 后台：server/05-db-参数查询.js
 */
import React, { Component } from 'react'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

// 
import CreateGraphql from './components/CreateGraphql'
import QueryGraphql from './components/QueryGraphql'


const client = new ApolloClient({
    url: '/graphql'
})


export default class App extends Component {
    refetch = null
    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <CreateGraphql cb={() => {
                        this.refetch()// 让refetch()重新执行的回调
                    }} />
                    <QueryGraphql fetch={(refetch) => {
                        this.refetch = refetch // 将QueryGraphql的refetch方法传回给refetch再让CreateGraphql通知该方法重新执行
                    }} />
                </div>
            </ApolloProvider>
        )
    }
}

