/*
 * @Author: Topskys
 * @Date: 2022-09-12 15:40:07
 * @LastEditTime: 2022-09-18 17:07:21
 */
import React, {
  useEffect
} from 'react'

import store from '../mobx/store'

export default function Detail(props) {
  // console.log(props.match.params.filmId)
  // props.location.query.filmId 
  // props.location.state.filmId 

  useEffect(() => {
    // store.dispatch 通知
    // store.showTabBar = false // Mobx 的configure严格模式已经打开，不得直接修改，可以调用store的方法修改
    store.changeHideTabBar()

    return () => {
      // store.showTabBar = true
      store.changeShowTabBar()
    }
  }, [])



  return (
    <div >
    Detail 
    {
      props.match.params.filmId
    } 
    </div>)
  }