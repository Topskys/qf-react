/*
 * @Author: Topskys
 * @Date: 2022-09-24 16:13:23
 * @LastEditTime: 2022-09-24 23:04:07
 */
import React, { Component } from 'react'
import { withRouter } from 'dva/router'

export default class Center extends Component {
    render() {
        return (
            <div>
                <WithChild />
            </div>
        )
    }
}

class Child extends React.PureComponent {
    render() {
        return <div>
            <button onClick={() => {
                // console.log(this.props)
                localStorage.removeItem("token")
                this.props.history.push("/login")
            }}>退出登录</button>
        </div>
    }
}

/**
 * @description: 新建Child高阶组件（干爹），才会有props(因为Center没有传)
 * Center-p-->withRouter(Child)--p->Child
 */
const WithChild = withRouter(Child)