/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:03:53
 * @LastEditTime: 2022-09-14 08:54:49
 */
import React,{useState,useEffect} from 'react'

import store from '../redux/store'


import getCinemaListAction from '../redux/actionCreators/getCinemaListAction'

export default function Cinemas(props) {

  // const [city, setCity] = useState(store.getState().city) // reducer 未被分割
  const [city, setCity] = useState(store.getState().CityReducer.city)
  const [cinemaList,setCinemaList] = useState(store.getState().CinemaListReducer.list)


  useEffect(() =>{
    if(store.getState().CinemaListReducer.list.length===0){
      // 请求数据
      // actionCreators 里写异步
      store.dispatch(getCinemaListAction())
    }else{
      // 使用reducer中的store缓存
      
      console.log("缓存")
    }
    
    // 订阅，必须在组件销毁时销毁，取消订阅
    var unsubscribe=store.subscribe(() => {
        setCinemaList(store.getState().CinemaListReducer.list)
    })

    return () =>{
      // 取消订阅
      unsubscribe()
    }

  },[])

  
  return (
    <div>
      <div style={{overflow:'hidden'}}>
        <div onClick={() =>{props.history.push('/city')}} style={{float: 'left'}}>{city}</div>
        <div onClick={() =>{props.history.push('/cinemas/search')}} style={{float: 'right'}}>搜索</div>
      </div>
      <ul>
        {
          cinemaList.map((item)=>
            <dl key={item.cinemaId} style={{padding:'10px'}}>
              <dt>{item.name}</dt>
              <dd  style={{fontSize:'12px',color:'gray'}}>{item.address}</dd>
            </dl>)
        }
      </ul>
    </div>
  )
}
