/*
 * @Author: Topskys
 * @Date: 2022-09-10 12:20:22
 * @LastEditTime: 2022-09-10 12:44:27
 */
import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'

export default function App() {

    const [list, setList] = useState([])
    const [name, setName] = useState("topsky")

    // useEffect(() => {
    //     axios({
    //         url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3775329',
    //         headers: {
    //             // , "bc": "440300"
    //             'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785"}',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(res => {
    //         setList(res.data.data.films)
    //     })
    // }, []) // 传空数组，表示该复函数没有依赖，只会执行一次；除了第一次执行，数组有值就可以根据[状态]依赖的改变而重复执行


    useEffect(()=> {
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    },[name]) 

    return ( 
        <div>
            <ul>
                {
                    list.map((item) => <li key={item.filmId}>{item.name}</li>)
                }
            </ul>
            {!list.length && <div>暂无数据</div>}
            {name}<button onClick={()=>setName("momo")}>changeName</button>
        </div>
    )
}