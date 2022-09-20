/*
 * @Author: Topskys
 * @Date: 2022-09-16 22:33:00
 * @LastEditTime: 2022-09-16 23:28:29
 * npm i immutable
 */
import React, {
    Component
} from 'react'
// immutable
import {
    Map
} from 'immutable' // 不可变对象的方法

var obj1 = {
    name: 'xiaohua',
    age: 18
}

// 普通对象--->immutable
var oldImmuObj = Map(obj1);
var newImmuObj = oldImmuObj.set("name", "xiaoming"); // oldImmuObj.get("name")='xiaohua'

// immutable--->普通对象
console.log(oldImmuObj.toJS(), newImmuObj.toJS());

export default class App extends Component {

    // immutable应用实例1
    // state = {
    //     info: Map({
    //         name:'T',
    //         age:18,
            //        filter:Map({
            //     text:'yy',
            //     up:true
            //    })
    //     })
    // }


    // render() {
    //     return (
    //     <div>
    //         <button onClick={()=>this.setState({info:this.state.info.set("name",'t').set("age",19)})}>click</button>
    //         {this.state.info.get("name")}
    //     </div>
    //     )
    // }



    // immutable应用实例2
    state = {
        info:{
            name:'T',
            age:18
        }
    }


    render() {
        return (
        <div>
            <button onClick={()=>{
                var old= Map(this.state.info)
                var newObj=old.set("name",'t').set("age",19)
                this.setState({info:newObj.toJS()})
            }}>click</button>
        </div>
        )
    }
}