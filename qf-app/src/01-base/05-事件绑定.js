/*
 * @Author: Topskys
 * @Date: 2022-09-04 23:38:21
 * 05-事件处理 
 */
import React, { Component } from 'react'

export default class App extends Component {
  a=100
  render() {
    return (
      <div>
        <input/>
        <button onMouseOver={()=>{
          console.log("鼠标移入")
        }}>
          onMouseOver </button>
          <button onClick = {
              // this.handleClick1 //当前this指向undefine，谁调用就指向谁
              this.handleClick1.bind(this)// 改变this指向class App
            } >
            Add this.handleClick不要括号，vue可加 </button>
            <button onClick = {
                ()=>{
                  this.handleClick2() // 箭头函数，this指向App，比较推荐
                }
              } >
              Add </button>
      </div>
    )
  }

  handleClick1(){
      console.log("点击",this.a)
  }

  handleClick2=(evt) => console.log("点击",evt.target) // evt 模拟原生的event
  
}

/**
 * 改变this指向三种方法
 * 1、call()，改变this指向，自动执行函数
 * 2、 apply()， 改变this指向， 自动执行函数
 * 3、 bind()， 改变this指向， 函数不会自动执行，需要给方法加括号getName()
 */

var obj1={
  name: "obj1",
  getName(){
    console.log(this.name)
  }
}

var obj2 = {
  name: "obj2",
  getName() {
    console.log(this.name)
  }
}

obj1.getName.call(obj2) // this指向obj2会自动调用obj2的getName()
obj1.getName().bind(obj2) 

/**
 * React事件绑定不会绑定在具体的标签元素上，比较消耗内存，它会绑定在根节点上root，事件代理模式。
 */
