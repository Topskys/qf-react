/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:03:53
 * @LastEditTime: 2022-09-19 08:47:51
 */
import React,{useState,useEffect} from 'react'

import store from '../mobx/store'
import {autorun} from 'mobx'

import {Observer} from 'mobx-react'


export default function Cinemas(props) {

  // const [city, setCity] = useState("")
  // const [cinemaList,setCinemaList] = useState([])


  useEffect(() =>{
    if(store.list.length===0){
      store.getCinemaList()
    }else{
      // 使用reducer中的store缓存
      
      console.log("缓存")
    }
    
    // // 只会监听函数里面面先关变量store.list，组件重新执行又再注册新的autorun，之前的autorun需要销毁。
    // var unAutoRun= autorun(() =>{
    //   // console.log(store.list)
    //   setCinemaList(store.list)
    // })

    // return () =>{
    //   // 销毁autorun，取消订阅
    //   unAutoRun()
    // }

  },[])

  
  return (
    <div>
      <div style={{overflow:'hidden'}}>
        <div onClick={() =>{props.history.push('/city')}} style={{float: 'left'}}>{store.city}</div>
        <div onClick={() =>{props.history.push('/cinemas/search')}} style={{float: 'right'}}>搜索</div>
      </div>
      <Observer>
        {
          ()=>{
            return store.list.map((item)=>
            <dl key={item.cinemaId} style={{padding:'10px'}}>
              <dt>{item.name}</dt>
              <dd  style={{fontSize:'12px',color:'gray'}}>{item.address}</dd>
            </dl>)
          }
        }
      </Observer>
    </div>
  )
}
