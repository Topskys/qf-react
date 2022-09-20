/*
 * @Author: Topskys
 * @Date: 2022-09-14 08:50:28
 * @LastEditTime: 2022-09-16 14:03:45
 */
import React, {
    useState,
    useEffect,
    useMemo
} from 'react'

import {
    store
} from '../redux/store'


import getCinemaListAction from '../redux/actionCreators/getCinemaListAction'

import {
    SearchBar
} from 'antd-mobile'

export default function Search(props) {

    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
    const [text, setText] = useState("")

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            // 请求数据
            // actionCreators 里写异步
            store.dispatch(getCinemaListAction())
        } else {
            // 使用reducer中的store缓存

            console.log("缓存")
        }

        // 订阅，必须在组件销毁时销毁，取消订阅
        var unsubscribe = store.subscribe(() => {
            setCinemaList(store.getState().CinemaListReducer.list)
        })

        return () => {
            // 取消订阅
            unsubscribe()
        }

    }, [])


    const getCinemaList = useMemo(() => cinemaList.filter(item =>
        item.name.toUpperCase().includes(text.toUpperCase()) ||
        item.address.toUpperCase().includes(text.toUpperCase())
    ), [cinemaList, text])

    return (
        <div>
            {/* <input type="text" value={text} onChange={(e) =>{setText(e.target.value)}}/> */}
            <div style={{padding:'10px'}}> <SearchBar placeholder = '请输入内容'
            showCancelButton = {
                () => true
            }
            value={text}
            onChange={(value)=>setText(value)}
            /></div >

            <ul>
                    {
                    getCinemaList.map((item)=>
                        <dl key = {
                            item.cinemaId
                        }
                        style = {
                            {
                                padding: '10px'
                            }
                        }
                        onClick = {
                            () => props.history.goBack()
                        } >
                        <dt>{item.name}</dt>
                        <dd  style={{fontSize:'12px',color:'gray'}}>{item.address}</dd>
                        </dl>)
                    }
                </ul>
        </div>
    )
}
