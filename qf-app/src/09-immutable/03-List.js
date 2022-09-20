/*
 * @Author: Topskys
 * @Date: 2022-09-16 23:41:05
 * @LastEditTime: 2022-09-16 23:43:13
 */
import React, { Component } from 'react'
import {List} from 'immutable'

var arr = List([1, 2, 3])

var arr2 = arr.push(4)
var arr3 = arr2.concat([5,6,7])
console.log(arr.toJS(),arr3.toJS())
export default class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
