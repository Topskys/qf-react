/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:03:35
 * @LastEditTime: 2022-09-12 18:16:47
 */
import React, { Component } from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'

export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{height:'150px',backgroundColor:'gold'}}>轮播</div>
        {/* 导航栏 */}
        <div>
          <ul>
            <li><NavLink to="/films/nowPlaying">正在热映</NavLink></li>
            <li><NavLink to="/films/comingSoon">即将上映</NavLink></li>
          </ul>
        </div>



        {/* 配置路由，嵌套路由 */}
        <Switch>
          {/* 这种写法会将NowPlaying编程Film组件的子组件，子组件就有props参数，里面包含有许多页面方法 */}
          <Route path="/films/nowPlaying" component={NowPlaying}></Route>
          <Route path="/films/comingSoon" component={ComingSoon}></Route>
          <Redirect from="/films" to ="/films/nowPlaying"></Redirect>
        </Switch>
      </div>
    )
  }
}

