/*
 * @Author: Topskys
 * @Date: 2022-09-12 15:40:07
 * @LastEditTime: 2022-09-12 23:54:58
 */
import React,{useEffect} from 'react'
// 引入redux
import store from '../redux/store'
// 
import {show,hidden} from '../redux/actionCreators/index'

export default function Detail(props) {

  useEffect(() => {

    // store.dispatch 通知
    store.dispatch(hidden())

    // 销毁时
    return () => {
      store.dispatch(show())
    }
  }, [])


  console.log(props.match.params.filmId)
  return ( <div >

    </div>
  )
}