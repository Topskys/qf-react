/*
 * @Author: Topskys
 * @Date: 2022-09-05 14:26:38
 * @LastEditTime: 2022-09-12 21:32:26
 */
style/*
 * @Author: Topskys
 * @Date: 2022-09-05 14:26:38
 * 数组增加、删除
 */
import React, { Component } from 'react'
// 引入css，react是单页面应用，会影响全局
// css会插入到<style></style>中间
// 解决css全局问题
// 1.使用不同的选择器，不使用纯标签选择器
// 2.新建css文件.module.css：选择器__randomString
// 使用：以对象形式导入css，在style={style.选择器名+"静态选择器"}
import './css/01-index.css'

export default class App extends Component {
    state={
        list:[
            {
                id:1,
                txt:1,
            },
            {
                id: 2,
                txt: 2,
            },
            {
                id: 3,
                txt: 3,
            }
        ]
    }
    inputRef=React.createRef()
  render() {
    return (
      <div>
        <input ref={this.inputRef} ></input>
        <button onClick={()=>{this.handleAdd()}}>add</button>

        <ul>
            {
                this.state.list.map((item,index) => 
                <li key={item.id}>
                    {/* {item.txt} */}


                    {/* 富文本展示，可解析html */}
                    <span dangerouslySetInnerHTML={{__html: item.txt}}></span>


                    {/* <button onClick={this.handleDelete.bind(this,index)}>delete</button> */}
                    <button onClick={()=>this.handleDelete(index)}>delete</button>
                </li>)
            }
        </ul>

        {/* 条件渲染 */}
        {/* {this.state.list.length===0?<div>暂无数据</div>:null} */}
        {/* {this.state.list.length===0 && <div>暂无数据</div>} */}
        <div className = {this.state.list.length === 0 ?'':'hidden'}>暂无数据</div>

      </div>
    )
  }

  /**
   * 新增
   */  
  handleAdd=()=>{
    

    // 不可直接修改状态，可能造成不预期的问题
    // this.state.list.push(this.inputRef.current.value)

    // let nList = this.state.list // 引用复制
    // let nList = [...this.state.list] 
    let nList = this.state.list.slice()  // 不传参，就是复制，官方
    nList.push({
        id:Math.random()*100000,
        txt:this.inputRef.current.value
    })
    this.setState({
        list: nList,
    })
    this.inputRef.current.value = ''
  }

    /**
     * 删除
     */  
    handleDelete=(index)=> {
        let nList = [...this.state.list] 
        nList.splice(index, 1)// 删除
        this.setState({
            list: nList,
        })
    }
}
