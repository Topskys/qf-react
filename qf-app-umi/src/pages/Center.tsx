/*
 * @Author: Topskys
 * @Date: 2022-09-25 09:23:56
 * @LastEditTime: 2022-09-25 10:43:58
 */
import React from 'react'

function Center(props: any) {
  return (
    <div>
      Center
      <button onClick={() => {
        localStorage.removeItem('token')
        props.history.push("/login")
      }}>退出登录</button>
    </div>
  )
}

/**
 * @description: wrapper：包装，给Center组件创建父组件Auth.tsx做登录验证
 */
Center.wrappers = ["@/wrappers/Auth"]
export default Center