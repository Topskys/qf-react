/*
 * @Author: Topskys
 * @Date: 2022-09-24 08:54:54
 * @LastEditTime: 2022-09-24 09:45:00
 * 添加完，让QueryGraphql重新请求数据，在通知QueryGraphql的refetch方法
 */
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

export default class CreateGraphql extends Component {
    createFilm = gql`
    mutation createFilm($input:FilmInput){
        createFilm(input:$input) {
            id,
            name,
            poster,
            price
        }
    }
    `
    nameRef = React.createRef()
    posterRef = React.createRef()
    priceRef = React.createRef()

    render() {
        return <div>
            <h4>添加</h4>
            <Mutation mutation={this.createFilm}>
                {
                    (createFilm, { data }) => {// 方法，{data}：方法执行结果
                        return <div>
                            <p>name：<input type="text" ref={this.nameRef} /></p>
                            <p>poster：<input type="text" ref={this.posterRef} /></p>
                            <p>price：<input type="number" ref={this.priceRef} /></p>
                            <button onClick={() => {
                                createFilm({
                                    variables: {
                                        input: {
                                            name: this.nameRef.current.value,
                                            price: Number(this.priceRef.current.value),
                                            poster: this.posterRef.current.value
                                        }
                                    }
                                }).then(res => { this.props.cb() })
                            }}>create</button>
                        </div>
                    }
                }
            </Mutation>
        </div >
    }
}