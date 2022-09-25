/*
 * @Author: Topskys
 * @Date: 2022-09-24 15:55:22
 * @LastEditTime: 2022-09-24 19:59:56
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import TabBar from '../components/TabBar/TabBar.js'

class App extends Component {
  render() {
    return (
      <div>
        {/* slot */}
        {this.props.children}
        {this.props.isShow && <TabBar />}
      </div>
    )
  }
}

/**
 * @description: connect()，高阶组件化
 * @return {*}
 */
export default connect((state) => {
  // console.log(state) // 拿到外部状态等，./models/maizuo.js
  return {
    isShow: state.maizuo.isShow // 给App传入isShow
  }
})(App)