/*
 * @Author: Topskys
 * @Date: 2022-09-16 22:02:48
 * @LastEditTime: 2022-09-16 22:33:54
 */
import React, {
    Component
} from 'react'


var obj1 = {
    name: 'T',
    arr: [1, 2, 3],
    // address: undefined
}
// 引用复制（浅复制），指针指向同一个地址空间
var obj2 = obj1
obj2.name = 't' // obj1.name='t'
// if obj1只有一层，则可以认为是深复制，多层还是浅复制，修改obj2复制属性值，obj1会受到影响。
var obj3 = {
    ...obj1,
}
obj3.name = "xiaohua" // obj1.name = "t" // 单层，不受影响
obj3.arr.splice(1, 1) // obj1.arr=[1,3] // 多层，受影响


// 深复制，但obj1中属性值不能为undefined
var jsonObj = JSON.parse(JSON.stringify(obj1))


// deepcopy
// 递归深复制， 一层层复制， 性能不好， 占用内存


// immutable(不可变对象)
// 一个深复制方案，对于已复制对象的某个属性的修改，进行单独再复制，而不是再复制全部属性和所有层级。




export default class App extends Component {
    render() {
        // return ( )
    }
}