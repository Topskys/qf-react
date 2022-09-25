/*
 * @Author: Topskys
 * @Date: 2022-09-24 16:57:38
 * @LastEditTime: 2022-09-24 20:09:08
 */
import React, { Component } from 'react'
import { connect } from 'dva'

class Detail extends Component {
    componentDidMount() {
        // console.log(this.props.match.params.id)
        this.props.dispatch({
            type: 'maizuo/hide'
        })
    }
    componentWillUnmount(){
        this.props.dispatch({
            type: 'maizuo/show'
        })
    }
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}


export default connect()(Detail)