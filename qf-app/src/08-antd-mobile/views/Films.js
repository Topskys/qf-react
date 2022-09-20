/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:03:35
 * @LastEditTime: 2022-09-16 11:24:02
 */
import React, { Component } from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'
import style from '../views/css/Films.module.css'
import  axios from 'axios'
// antd-mobile
import { Swiper,Tabs} from 'antd-mobile'

export default class Films extends Component {

  state={
    loopList:[]
  }

    componentDidMount() {
      // 由于banner数据为空，用正在热映图片代替banner
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3816392',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        this.setState({
          loopList: res.data.data.films.splice(5,5)
        })
      })
      
    }

  render() {
    return (
      <div>
        {/* 轮播 */}
        <Swiper autoplay loop style={{height:'150px'}}>
          {
            this.state.loopList.map(item=>
            <Swiper.Item key={item.filmId}>
              <img src={item.poster} alt={item.name} style={{width: '100%',backgroundPosition: 'center',backgroundSize: 'cover'}}/>
            </Swiper.Item>)
          }
        </Swiper>
        {/* 导航栏 */}
        <div style={{position: 'sticky',top:0,backgroundColor:'white'}}>
          <Tabs activeKey={this.props.location.pathname} onChange={(value)=>{this.props.history.push(value)}}>
          <Tabs.Tab title = '正在热映' key = '/films/nowPlaying' > </Tabs.Tab>
          <Tabs.Tab title = '即将上映' key = '/films/comingSoon' > </Tabs.Tab>
        </Tabs>
        </div>
        {/* <div className={style.navBar}>
          <ul>
            <li><NavLink to="/films/nowPlaying" activeClassName={style.navBar__active}>正在热映</NavLink></li>
            <li><NavLink to="/films/comingSoon" activeClassName={style.navBar__active}>即将上映</NavLink></li>
          </ul>
        </div> */}



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

