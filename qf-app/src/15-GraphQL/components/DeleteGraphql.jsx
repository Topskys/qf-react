/*
 * @Author: Topskys
 * @Date: 2022-09-24 08:59:21
 * @LastEditTime: 2022-09-24 09:31:32
 */
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


export default class DeleteGraphql extends Component {
    deleteFilm = gql`
    mutation deleteFilm($id:String!){
        deleteFilm(id:$id) 
    }
    `

    render() {
        return <div>
            <Mutation mutation={this.deleteFilm}>
                {
                    (deleteFilm, { data }) => {// 方法，{data}：方法执行结果
                        return <div>
                            <button onClick={() => {
                                deleteFilm({
                                    variables: {
                                        id: this.props.id,
                                    }
                                }).then(res=>{this.props.cb()})
                            }}>delete</button>
                        </div>
                    }
                }
            </Mutation>
        </div >
    }
}