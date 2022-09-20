/*
 * @Author: Topskys
 * @Date: 2022-09-06 21:15:01
 * @LastEditTime: 2022-09-07 10:37:57
 * 受控组件。
 */
import React, { Component } from 'react'

// 类组件
// export default class TabBar extends Component {

//     render() {
//         return (
//         <div>
//             <ul>
//                 {
//                     this.props.list.map((item,index) => 
//                     <li key={item.id} className={this.props.current===index?'active':''}
//                     onClick={()=>this.props.myevent(index)}>{item.txt}</li>)
//                 }
//             </ul>
//         </div>
//         )
//     }

// }


// 函数组件
export default function TabBar(props){
    return (
        <div>
            <ul>
                {
                    props.list.map((item,index) => 
                    <li key={item.id} className={props.current===index?'active':''}
                    onClick={()=>props.myevent(index)}>{item.txt}</li>)
                }
            </ul>
        </div>
    )
}
