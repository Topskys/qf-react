/*
 * @Author: Topskys
 * @Date: 2022-09-10 14:34:30
 * @LastEditTime: 2022-09-10 13:27:56
 */
import React, { Component,useEffect } from 'react'

export default class App extends Component {


    state={
        isCreated: true,
    }


    render() {
        return (
            <div>
                <button onClick={()=>this.setState({isCreated: !this.state.isCreated})}>showChild</button>
                {this.state.isCreated && <Child></Child>}
            </div>
        )
    }
}


function Child () {
    useEffect(() => {
        window.onresize = () => {
            console.log('resize')
        }

        var timer=setInterval(() => {
            console.log('timer')
        }, 1000)

        return () =>{
            console.log('组件销毁')
            window.onresize = null // 销毁事件
            clearInterval(timer) // 销毁定时器
        }
    },[])


    // useEffect 可以写多个，后面的useEffect不会覆盖前面的内容
    // useLayoutEffect和useEffect多大区别，他们的调用时期不同
    // useLayoutEffect和componentDidMount&componentDidUpdate一致，DOM更新完会立马同步调用的代码，会阻塞页面渲染，出现页面抖动
    // useEffect：会在整个页面渲染完毕才会执行调用的代码，推荐使用该方法


    return (
            <div>child</div>
        )
}

// class Child extends Component {

//     componentDidMount() {
//         window.onresize = () => {
//             console.log('resize')
//         }

//         /**
//          * 将定时器挂载到this上，方便销毁函数clear
//          */        
//         this.timer=setInterval(() => {
//             console.log('timer')
//         },5000)
//     }


//     render() {
//         return (
//             <div>child</div>
//         )
//     }


//     /**
//      * 销毁
//      */    
//     componentWillUnmount(){
//         window.onresize=null // 销毁事件
//         clearInterval(this.timer) // 销毁定时器
//         console.log('xiaohui')
//     }

    
// }