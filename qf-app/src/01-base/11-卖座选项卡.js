/*
 * @Author: Topskys
 * @Date: 2022-09-05 15:16:18
 * 11 - 卖座选项卡
 */
import React, { Component } from 'react'
import './css/01-index.css'

// 引入组件
import Film from './maizuocomponents/Film'
import Cinema from './maizuocomponents/Cinema'
import Center from './maizuocomponents/Center'

export default class App extends Component {

    state={
        list:[
            {
                id: 1,
                    txt: "首页"
            },
            {
                id: 2,
                txt: "影院"
            }
            , {
                id: 3,
                txt: "我的"
            }
        ],
        current:0,
    }

    /**
     * 底部tabBar处理函数
     */    
    tabBar(){
        switch(this.state.current){
            case 0:
                return <Film> </Film>
                case 1:
                    return <Cinema></Cinema>
                    case 2:
                        return <Center></Center>
        }
    }

  render() {
    return (
      <div>
        {/* 方法1 */}
        {/* {
            this.state.current === 0 && <Film ></Film>
        }
        {
            this.state.current === 1 &&  <Cinema></Cinema>
        }
        {
            this.state.current === 2 && <Center></Center>
        } */}

        {/* 方法2 */}
        {
            this.tabBar()
        }
       
        <ul>
            {
                // this.state.list.map((item,index) => <li key={item.id} className={this.state.current===index?'active':''} onClick={()=>this.setState({current: index})}>{item.txt}</li>)
                this.state.list.map((item,index) => <li key={item.id} className={this.state.current===index?'active':''} onClick={()=>this.handleClick(index)}>{item.txt}</li>)
            }
        </ul>
      </div>
    )
  }

  handleClick(index){
    this.setState({
        current: index
    })
  }
}
