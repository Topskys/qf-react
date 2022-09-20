/*
 * @Author: Topskys
 * @Date: 2022-09-17 15:18:08
 * @LastEditTime: 2022-09-18 17:05:02
 * Mobx用于代替Redux的状态管理工具
 * 利用getter和setter来收集组件的数据依赖关系，从而在数据发生变化时精准知道哪些组件需要重绘
 * ----(事件)----Actions----(修改)----Store----(更新)----Computed Value----(触发)----Reactions----(事件调用)指向Actions----Actions，vuex类似
 * 
 * Mobx与redux的区别
 * o Mobx写法上更偏向于OOP。 对一份数据直接进行修改操作， 不需要始终返回一个新的数据。 并非单一store, 可以多store。
 * o Redux默认以JavaScript原生对象形式存储数据， 而Mobx使用可观察对象.
 * 优点:
 * a.学习成本小
 * b.面向对象编程, 而且对TS友好
 * 缺点:
 * a． 过于自由: Mobx提供的约定及模版代码很少， 代码编写很自由， 如果不做一些约定， 比较容易导致团队代码风格不统一，
 * b.相关的中间件很少， 逻辑层业务整合是问题。

 */
import React from 'react'
// npm i mobx@5
import {
    observable,
    autorun
} from 'mobx'

// 对于普通类型数据的监听
var observableNumber = observable.box(10)
// 第一次执行，之后数据发生变化也会执行，该函数可以写多个
autorun(() => {
    console.log(observableNumber.get())
})
// 每次observableNumber改变都会触发autorun，因为observableNumber被autorun监听
setTimeout(() => {
    observableNumber.set(20)
}, 1000)



// 复杂类型的监听，写法1
var obj = observable.map({
    name: 'Topsky',
    age: 18,
})
obj.set("name", "T")
autorun(() => {
    console.log("对象的属性name改变了", obj.get("name"))
})
obj.set("age", 19) // 因为没有对该属性进行监听，所以不会触发autorun

// 复杂类型的监听，写法2
var obj = observable({ // 
    name: 'Topsky',
    age: 18,
})

autorun(() => {
    console.log("对象的属性name改变了", obj.get("name"))
})

setTimeout(() => {
    obj.name = "YY" // 
}, 1000)



export default function App() {
    return ( 
        <div> App </div>
    )
}