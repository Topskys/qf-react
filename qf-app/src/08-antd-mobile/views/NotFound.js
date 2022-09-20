/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:38:42
 * @LastEditTime: 2022-09-14 21:05:07
 */
import React,{useEffect} from 'react'

function NotFound(props) {

  useEffect(() => {
    console.log('Not Found:',props)
  },[props])


  return ( <div > NotFound </div>
  )
}

// react-redux原理，connect还原
// HOC与context通信在react-redux底层中的应用
// 1.context是HOC，高阶组件
// 2.Provider组件，可以让容器组件拿到state，使用了context

// 高阶组件构建与应用
// HOC不仅仅是一个方法，确切说应该是一个组件工厂，获取低阶组件，生成高阶组件
// 1.代码复用，代码模块化
// 2.增删改props
// 3.渲染劫持

function Topskyconnect(callback,obj) {
  var value=callback()
  return (MyComponent)=>{
    return (props)=>{
      return <div style={{color: 'red'}}>
        <MyComponent {...value}{...props} {...obj}/>
      </div>
    }
  }
}


export default Topskyconnect(()=>{
  return{
    a:1,
    b:2,
  },{
    fun(){},
  }
})(NotFound)