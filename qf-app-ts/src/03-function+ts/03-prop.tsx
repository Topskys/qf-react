/*
 * @Author: Topskys
 * @Date: 2022-09-19
 * @LastEditTime: 2022-09-19 21:21:17
 */
import React, { } from 'react'

export default function Parent() {

    return (
        <div>Parent
            <Child name="child-01" />
        </div>
    )
}


/**
 * @description: 用于检查属性名和值是否错误
 */
interface IProps {
    name: string
}
// function Child(props: IProps) {
//     return (
//         <div>Child{ props.name}</div>
//     )
// }
// 或
const Child: React.FC<IProps> = (props) => {
    return <div>Child--{props.name}</div>
}

