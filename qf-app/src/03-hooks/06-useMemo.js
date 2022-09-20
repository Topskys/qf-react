/*
 * @Author: Topskys
 * @Date: 2022-09-10 13:46:21
 * @LastEditTime: 2022-09-10 14:02:18
 * useMemo： useCallback的功能可以完全由useMemo所取代， 也可以使用useMemo返回一个记忆函数
 * useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs)
 * 区别： useCallback不会执行第一个参数函数， 而是返回给你， useMemo会执行第一个函数并返回结果
 * 故useCallback常用记忆事件函数， 生成记忆后的事件函数并传递给子组件使用， 而useMemo更合适经过函数计算得到一个确定的值， 比如记忆组件
 */
import React,{useState,useCallback, useMemo} from 'react'

export default function App() {

    // useState：记忆函数，记住状态
    // const [count,setCount] = useState(0)

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


    const handleDel=useMemo(
        ()=>(index) => {
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
