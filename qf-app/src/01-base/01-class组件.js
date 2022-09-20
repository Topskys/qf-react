/*
 * @Author: Topskys
 * @Date: 2022-09-04 22:33:07
 */

/**
 * 父类
 * ES6类的写法
 */
class Test{
    constructor(){
        this.a=1
        // this.d = 1
    }

    d=1 // ==this.d=1

    testa(){
        console.log("testa")
    }
}

/**
 * 继承
 */
class ChildText extends Test{
    testb() {
        console.log("testa")
    }
}

/**
 * 使用
 */
var t=new ChildText();
t.testa()
console.log("extends Test",t.a)



// React组件类，类似ES6类的写法

// import react from 'react'
// class App extends React.Component {
//     render() {
//         return (<div>Hello React Component!</div>) // 必须只有一个根节点
//     }
// }
// export default App


// React组件的使用

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './01-base/01-class组件.js' // App 首字母大写
// ReactDOM.render(<App></App>,document.getElementById('root'))