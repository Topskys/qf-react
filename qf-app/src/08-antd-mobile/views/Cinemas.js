/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:03:53
 * @LastEditTime: 2022-09-19 16:58:11
 */
import React, { useState, useEffect } from 'react'

// import store from '../redux/store'
import {
  connect
} from 'react-redux'



import getCinemaListAction from '../redux/actionCreators/getCinemaListAction'


import { SearchOutline } from 'antd-mobile-icons'
import { NavBar } from 'antd-mobile'


function Cinemas(props) {

    // const [city, setCity] = useState(store.getState().city) // reducer 未被分割
    // const [city, setCity] = useState(store.getState().CityReducer.city)
    // const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.list)

    let { list, city, getCinemaListAction } = props

    useEffect(() => {
      // if(store.getState().CinemaListReducer.list.length===0){
      if (list.length === 0) {
        // 请求数据
        // actionCreators 里写异步
        // store.dispatch(getCinemaListAction())
        getCinemaListAction()
      } else {
        // 使用reducer中的store缓存

        console.log("缓存")
      }

      // // 订阅，必须在组件销毁时销毁，取消订阅
      // var unsubscribe=store.subscribe(() => {
      //     setCinemaList(store.getState().CinemaListReducer.list)
      // })

      // return () =>{
      //   // 取消订阅
      //   unsubscribe()
      // }

    }, [list, city, getCinemaListAction])


    return (
      <div>
        {/* <div style={{overflow:'hidden'}}>
        <div onClick={() =>{props.history.push('/city')}} style={{float: 'left'}}>{city}</div>
        <div onClick={() =>{props.history.push('/cinemas/search')}} style={{float: 'right'}}>搜索</div>
      </div> */}
        <NavBar left={
          <div onClick={() => { props.history.push('/city') }}>{city}</div>
        }
          back={
            null
          }
          right={
            < SearchOutline onClick={
              () => {
                props.history.push('/cinemas/search')
              }
            }
            />}>影院</NavBar>
        <ul>
          {
            // cinemaList.map((item)=>
            //   <dl key={item.cinemaId} style={{padding:'10px'}}>
            //     <dt>{item.name}</dt>
            //     <dd  style={{fontSize:'12px',color:'gray'}}>{item.address}</dd>
            //   </dl>)

            list.map((item) =>
              <dl key={item.cinemaId} style={{ padding: '10px' }}>
                <dt>{item.name}</dt>
                <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
              </dl>)
          }
        </ul>
      </div>
    )
  }


const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.list,
    city: state.CityReducer.city
  }
}

const mapDispatchToProps = {
  getCinemaListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)