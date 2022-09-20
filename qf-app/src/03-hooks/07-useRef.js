/*
 * @Author: Topskys
 * @Date: 2022-09-10 21:22:22
 * @LastEditTime: 2022-09-10 22:15:10
 */
import React, {
    useState,
    useRef
} from 'react'

export default function App() {

    const inputUseRef = useRef() // React.createRef()
    const [list, setList] = useState(["a", "b", "c", "d", "e", "f"])


    const handleAdd = () => (setList([...list, inputUseRef.current.value]), inputUseRef.current.value = "")


    const handleDel = (index) => {
        let arr =[...list] 
        arr.splice(index, 1)
        setList(arr)
    }


    return (
        <div>
            <input ref={inputUseRef}/>
            <button onClick={handleAdd}>add</button>
            <ul>
                {list.map((item,index) => <li key={item}>
                    {item}
                    <button onClick={()=>{handleDel(index)}}>del</button>
                </li>)}
            </ul>
        </div>
    )
}