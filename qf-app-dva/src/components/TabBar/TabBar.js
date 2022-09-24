/*
 * @Author: Topskys
 * @Date: 2022-09-24 15:55:22
 * @LastEditTime: 2022-09-24 16:27:29
 */
import React, { Component } from 'react'
import style from './TabBar.css'
import { NavLink } from 'dva/router'

export default class TabBar extends Component {
  render() {
    return (
      <div>
        <footer>
          <ul>
            <li><NavLink to="/film" activeClassName={style.active}>Film</NavLink></li>
            <li><NavLink to="/cinema" activeClassName={style.active}>Cinema</NavLink></li>
            <li><NavLink to="/center" activeClassName={style.active}>Center</NavLink></li>
          </ul>
        </footer>
      </div>
    )
  }
}
