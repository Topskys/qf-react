/*
 * @Author: Topskys
 * @Date: 2022-09-23
 * @LastEditTime: 2022-09-23 21:41:11
 */
import React, { Component } from 'react'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
    url: '/graphql'
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
                    <UpdateGraphql />
                </div>
            </ApolloProvider>
        )
    }
}


class UpdateGraphql extends Component {
    updateFilm = gql`
    mutation updateFilm($id:String!,$input:FilmInput){
        updateFilm(id:$id,input:$input) {
            id,
            name,
            poster,
            price
        }
    }
    `

    render() {
        return <div>
            <Mutation mutation={this.updateFilm}>
                {
                    (updateFilm, { data }) => {// 方法，{data}：方法执行结果
                        console.log(data)
                        return <div>
                            <button onClick={() => {
                                updateFilm({
                                    variables: {
                                        id: "632db623093d44471cfefc31",
                                        input: {
                                            name: '1-Update',
                                            price: 101,
                                            poster: "http://1-Update"
                                        }
                                    }
                                })
                            }}>Update</button>
                        </div>
                    }
                }
            </Mutation>
        </div >
    }
}