/**
 * hooks
 * hooks和函数式组件先关应用，可以实现类组件同样的功能，函数式组件没有生命周期
 * useState：保存函数式组件的状态和修改
 * rfc：创建默认基础模板快捷键
 */
import React,{useState} from 'react'

export default function App() {

    // 通过setState改变状态，将会重新执行函数App
    // const [state, setState] = useState("Topsky")
    const [text, setText] = useState("")
    const [list, setList] = useState(["a","b","c","d","e","f"])


    const handleAdd = () => {
        setList([...list, text])
        setText("")
    }


    const handleDel=(index)=> {
        var newList=[...list]
        newList.splice(index, 1)
        setList([...newList])
    }

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
