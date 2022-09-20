/*
 * @Author: Topskys
 * @Date: 2022-09-17 
 * @LastEditTime: 2022-09-17 14:59:01
 * 简化immutable写法， fromJS比Map + List简单， 子对象或数组不用加Map或List
 */
import React, { Component } from 'react'

import {fromJS} from 'immutable'

export default class App extends Component {

    state={
        info:fromJS({ 
            name: 'T',
            age:18,
            location:{
                    province: '福建',
                    city: '深圳',
                },
            favour:["看报","写作","老嗨"]
        })
    }

    
    render() {
        return (
            <div>
                <h1>个人信息修改</h1>

                <button onClick={()=>
                    this.setState({ 
                        info:this.state.info.set("name","u") // setIn(["name"],"u")
                        // .set("location",this.state.info.get("location")
                        // .set("city","厦门"))
                        .setIn(["location","city"],"厦门") // 深入修改
                    })
                }>修改</button>
                <div>
                    {this.state.info.get("name")}
                    <br/>
                    {
                        this.state.info.get("location").get("province")
                    } - {
                        this.state.info.get("location").get("city")
                    }
                    <br/>
                    {
                        this.state.info.get("favour")._tail.array.map((item, index) => 
                            <li key={item}>
                                {item}
                                <button onClick={()=>{
                                    this.setState({
                                        // info: this.state.info.set("favour",this.state.info.get("favour").splice(index, 1))
                                        // info: this.state.info.setIn(["favour", index], index)
                                        info: this.state.info.updateIn(["favour"], (list) => list.splice(index, 1))
                                    })
                                }}>del</button>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }
}
