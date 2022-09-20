/*
 * @Author: Topskys
 * @Date: 2022-09-05 10:43:36
 * 07 - state状态
 */

import React, {
    Component
} from 'react'

export default class App extends Component {
    /**
     * 状态
     * 方法1
     * 状态改变，DOM会自动发生变化，重新渲染
     */
    // state={
    //     txt:"收藏",
    //     showTxt:true,
    // }

    /**
     * 状态
     * 方法2
     * 构造器
     */
    constructor() {
        super(); // 继承，继承之前组件类
        this.state = {
            txt: "收藏",
            showTxt: true,
        }
    }


    render() {
        return ( 
            <div>
            <button onClick = {
                () => {
                    // this.state.txt="取消" // 直接修改state会被警告，React没有像vue使用ES5的object.defineProperty拦截处理再触发getter和setter自动修改
                    this.setState({ // 简介修改状态
                        // txt:"取消",
                        showTxt: !this.state.showTxt
                    })
                }
            } > {
                // this.state.txt
                this.state.showTxt ? "收藏" : "取消"
            } </button> 
            </div>
        )
    }
}