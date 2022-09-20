/*
 * @Author: Topskys
 * @Date: 2022-09-06 10:07:58
 */
import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    state={
        list:[
            {
                id:1,
                txt:"tjnl1",
                checked:true,
            },
            {
                id: 2,
                txt: "eybv2",
                checked:false,
            },
            {
                id: 3,
                txt: "3hgj",
                checked:false,
            }
        ],
        input: '',
    }
  render() {
    return (
      <div>
        {/* <input ref={this.inputRef} ></input> */}
        <input value={this.state.input} onChange={(e) => this.setState({input: e.target.value})}></input>
        <button onClick={()=>{this.handleAdd()}}>add</button>

        <ul>
            {
                this.state.list.map((item,index) => 
                <li key={item.id}>
                    <input type='checkbox' checked={item.checked} onChange={() => this.handleChecked(index)} style={{width:'10px'}}/>
                    {/* {item.txt} */}
                    {/* 富文本展示，可解析html */}
                    <span dangerouslySetInnerHTML={{__html: item.txt}} style={{textDecoration:item.checked?"line-through":""}}></span>
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
        txt:this.state.input
    })
    this.setState({
        list: nList,
        input: ""
    })
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

    /**
     * 点击checkbox增加删除线
     */    
    handleChecked=(index)=> {
            let nList = [...this.state.list]
            nList[index].checked = !nList[index].checked
            this.setState({
                list: nList
            })
    }
}
