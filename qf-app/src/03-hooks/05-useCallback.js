/*
 * @Author: Topskys
 * @Date: 2022-09-10 13:29:00
 * @LastEditTime: 2022-09-10 22:34:07
 * useCallback： 缓存， 记忆函数， 防止组件函数频繁重复定义，使用的是闭包的原理
 */
import React,{useState,useCallback} from 'react'

export default function App() {

    // useState：记忆函数，记住状态
    // 还可以使用useRef保存值
    const [count,setCount] = useState(0)

    // return (
    //     <div>
    //         {count}<button onClick={() =>setCount(count+1)}>add</button>
    //     </div>
    // )


    const [text, setText] = useState("")
    const [list, setList] = useState(["a","b","c","d","e","f"])


    const handleAdd = useCallback(
        () =>{
            setList([...list, text])
            setText("")
    },[list,text]) // []有参函数才被重新定义


    const handleDel=useCallback(
        (index) => {
            var newList = [...list]
            newList.splice(index, 1)
            setList([...newList])
        },[list]
    )

    return (
        <div>
            <input type="text" value={text} onChange={(e) =>{setText(e.target.value)}}/>
            <button onClick={handleAdd}>useState</button>
            <ul>
                {
                    list.map((item,index) => <li key={item}>{item}<button onClick={() =>handleDel(index)}>del</button></li>)
                }
            </ul>
            {!list.length && <div>暂无数据</div>}
        </div>
    )
}
