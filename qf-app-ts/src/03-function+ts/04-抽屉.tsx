/*
 * @Author: Topskys
 * @Date: 2022-09-19 20:35:05
 * @LastEditTime: 2022-09-19 21:26:54
 */
import { useState, } from 'react'


export default function Drawer() {

    const [isShow, setIShow] = useState<boolean>(false)

    return (
        <div>
            <NavBar title="首页" cb={() => {
                setIShow(!isShow)
            }} />
            {isShow && <Sidebar></Sidebar>}
        </div>
    )
}



interface IProps {
    title?: string,// 可选
    cb: () => void,
}
function NavBar(props: IProps) {
    return (
        <div>
            {props.title}
            <button onClick={() => props.cb()}>click</button>
        </div>
    )
}


function Sidebar() {
    return (
        <div>Sidebar</div>
    )
}
