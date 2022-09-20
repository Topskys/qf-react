import React, { useState, useRef } from 'react'

/**
 * @description: 函数式组件，有的地方可以不用写限制类型、规范，它会自动规范
 */
export default function App() {
    const [list, setList] = useState<string[]>([])
    // TS版的ref需要设定严格类型
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            {/* ref版、as：断言，否则因为初始值为null会报错 */}
            <input ref={inputRef} placeholder="请输入" />
            <button onClick={
                () => {
                    setList([...list, (inputRef.current as HTMLInputElement).value])
                }}>
                click</button>
            <ul>
                {
                    list.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        </div>
    )
}
