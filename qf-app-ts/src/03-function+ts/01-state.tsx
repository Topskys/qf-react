/*
 * @Author: Topskys
 * @Date: 2022-09-19 
 * @LastEditTime: 2022-09-19 21:02:53
 * 函数式组件TS不用设定类型，可以根据初始值进行判断类型并且检查错误
 */
import React, { useState } from 'react'

export default function App() {
    // const [name, setName] = useState<string>("topskys")
    const [name, setName] = useState("topskys") // 隐形，函数式组件可以不用写泛型<string>，会自动根据初始值判断类型
    return (
        <div>
            {name.substring(0, 1).toUpperCase() + name.substring(1)}
            <button onClick={() => { setName("lihua") }}>修改</button>
        </div>
    )
}


