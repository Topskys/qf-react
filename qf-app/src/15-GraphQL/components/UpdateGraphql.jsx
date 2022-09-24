/*
 * @Author: Topskys
 * @Date: 2022-09-24
 * @LastEditTime: 2022-09-24 09:49:11
 */
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'



export default class UpdateGraphql extends Component {
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
    nameRef = React.createRef()
    posterRef = React.createRef()
    priceRef = React.createRef()

    render() {
        return <div>
            <h4>更新</h4>
            <Mutation mutation={this.updateFilm}>
                {
                    (updateFilm, { data }) => {// 方法，{data}：方法执行结果
                        return <div>
                            <p>name：<input type="text" ref={this.nameRef} /></p>
                            <p>poster：<input type="text" ref={this.posterRef} /></p>
                            <p>price：<input type="number" ref={this.priceRef} /></p>
                            <button onClick={() => {
                                updateFilm({
                                    variables: {
                                        id: this.props.id,
                                        input: {
                                            name: this.nameRef.current.value,
                                            price: Number(this.priceRef.current.value),
                                            poster: this.posterRef.current.value
                                        }
                                    }
                                }).then(res => { this.props.cb() })
                            }}>Update</button>
                        </div>
                    }
                }
            </Mutation>
        </div >
    }
}