/*
 * @Author: Topskys
 * @Date: 2022-09-24 16:13:04
 * @LastEditTime: 2022-09-24 20:45:57
 */
import React, { Component } from 'react'
import { connect } from 'dva'
class Cinema extends Component {
    componentDidMount() {
        if (this.props.cinemaList.length === 0) {
            this.props.dispatch({
                type: 'maizuo/getCinemaList' // effects: {* getCinemaList(action, { call, put })}
            })
        } else {
            console.log("走缓存", this.props.cinemaList)
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.cinemaList.map(item =>
                            <li key={item.cinemaId} style={{ padding: '10px ' }}>
                                <dd>{item.name}</dd>
                                <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ cinemaList: state.maizuo.cinemaList })

export default connect(mapStateToProps)(Cinema)