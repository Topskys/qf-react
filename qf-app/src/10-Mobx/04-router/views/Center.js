/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:04:09
 * @LastEditTime: 2022-09-12 17:52:30
 */
import React from 'react'

export default function Center(props) {
  return (
    <div>
      center
      <div>
        <button onClick={() =>{props.history.push('/order')}}>订单</button>
      </div>
    </div>
  )
}
