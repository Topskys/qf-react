/*
 * @Author: Topskys
 * @Date: 2022-09-04 23:09:27
 * 组件的样式 
 */
import React, { Component } from 'react'
// 导入外部css模块，这种方法受webpack的支持，wp会把样式放在index.html的style标签中。 
import './css/01-index.css'

export default class App extends Component {
  render() {
    var name = "T"
    // 方法1：
    var styleObj={
        // 或 style={{backgroundColor:"gold"}}
        // key:value
        backgroundColor:"green",
        fontSize:"20px"
    }
    return (
      <div style={styleObj}>04-组件的样式 
        js单大括号-{10+349} {10>30?false:name} 'vue的js是双大括号'
        <div style={{backgroundColor:"yellow"}}>直接把样式对象放在style属性上,React推荐行内样式，组件独立性更高，方便</div>
        <div className="active">方法2：外部css，由于样式class和类均class会被警告，样式类用className代替</div>

        <div id="myId"># id 选择器</div>

        <label htmlFor= "username" > 用户名： </label>
        <input type="text" id="username" placeholder="点击用户名自动聚焦，for会被警告，用htmlFor代替"/>
        
      </div>
    )
  }
}
