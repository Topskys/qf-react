/*
 * @Author: Topskys
 * @Date: 2022-09-17 14:03:42
 * @LastEditTime: 2022-09-17 14:42:44
 */
import React, { Component } from 'react'

import {Map,List} from 'immutable'

export default class App extends Component {

    state={
        info:Map({ 
            name: 'T',
            age:18,
            location:Map({
                    province: '福建',
                    city: '深圳',
                }),
            favour:List(["看报","写作","老嗨"])
        })
    }

    
    render() {
        return (
            <div>
                <h1>个人信息修改</h1>

                <button onClick={()=>
                    this.setState({ 
                        info:this.state.info.set("name","u")
                        .set("location",this.state.info.get("location")
                        .set("city","厦门"))
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
                                        info: this.state.info.set("favour",this.state.info.get("favour").splice(index, 1))
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
