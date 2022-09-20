/*
 * @Author: Topskys
 * @Date: 2022-09-10 22:32:51
 * @LastEditTime: 2022-09-10 22:46:52
 * 如何保存一个变量？ 使用useRef、 useState， 原理闭包
 */
import React,{useState,useRef} from 'react'

export default function App() {

    const [count,setCount]= useState(0)

    var myCount=useRef(0) // 这里不是重新赋值0，useRef可以记住历史值
    
    return (
        <div>
            <button onClick={()=>{
                    setCount(count+1)
                    myCount.current++
                }}>add</button>
            {count}-{myCount.current}
        </div>
    )
}
