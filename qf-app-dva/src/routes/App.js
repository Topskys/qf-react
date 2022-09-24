/*
 * @Author: Topskys
 * @Date: 2022-09-24 15:55:22
 * @LastEditTime: 2022-09-24 16:49:43
 */
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* slot */}
        {this.props.children}
      </div>
    )
  }
}
