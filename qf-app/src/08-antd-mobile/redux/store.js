/*
 * @Author: Topskys
 * @Date: 2022-09-12 23:19:12
 * @LastEditTime: 2022-09-14 21:46:35
 * redux，全局(对象)状态管理，数据存在浏览器内存中，类似vux
 * state以单一对象存储在store对象中，state只读并且每次都返回一个新的对象
 * 使用(纯函数)reducer执行state更新
 * 纯函数：对外界没有副作用，没有对外界的对象、变量等值修改的权利，同样的输入得到同样的输入
 * store.subscribe() 
 * store.dispatch() // 该方法会被遍历直接调用，同步可行，不论reducer是否拆分，异步不行
 * store.getState()
 * 
 * Redux工作流程
 * React Components---->Action Creators----dispatch(action)---->Store(<----(prevState,action)/(newState)---->Reducers)/----(state)---->React Components
 */

// 安装 npm i redux
// 1.引入redux
// 2.引入createStore(reducer)
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux'

// 中间件
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'


// 安装npm i redux-devtools-extension开发调式工具
// 浏览器也需要安装该插件
// 可以查看store中存储的状态。
// 可以操作reducer运行的action对象。
// 可以自己添加action进行dispatch， 查看效果。
// 引入reducx-devtools-extension
// import {
//     composeWithDevTools
// } from 'redux-devtools-extension'



// 将已经分割出去的reducer引入该目录进行合并reducers
import TabBarReducer from './reducers/TabBarReducer'
import CityReducer from './reducers/CityReducer'
import CinemaListReducer from './reducers/CinemaListReducer'


// redux-persist 持久化
// npm i redux-persist
import {
    persistStore,
    persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web






/**
 * 状态较少时，可以写在同一文件
 * 注释掉，已经将reducer分割写入reducers文件夹
 */
// const reducer = (prevState = {
//     showTabBar: true,
//     city: '深圳',
// }, action) => {
//     let newState = {
//         ...prevState
//     }
//     switch (action.type) {
//         case 'hidden-tabBar':
//             newState.showTabBar = false
//             return newState
//         case 'show-tabBar':
//             newState.showTabBar = true
//             return newState
//         case 'change-city':
//             newState.city = action.payload
//             return newState
//         default:
//             return prevState
//     }
//     return prevState
// }




// 合并reducer
const reducer = combineReducers({
    CityReducer,
    TabBarReducer,
    CinemaListReducer,
})


// 持久化
const persistConfig = {
    key: 'Topsky',
    storage,
    whitelist: ['CityReducer'] // or blacklist // 选择城市持久化，刷新值不变
}
// 根据配置让reducers持久化
const persistedReducer = persistReducer(persistConfig, reducer)




// 不在项目中安装redux-devtools-extension，需要在此配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



// const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk, reduxPromise)))
// const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

// 持久化
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))
let persistor = persistStore(store)



export {
    store,
    persistor
}


// export default store



// /**
//  * @description: 利用订阅者模式，简单还原redux源码及原理
//  * @param {*} reducer
//  * @return {*}
//  */
// function createTopskyStore(reducer) {
//     var list = []
//     var state = reducer(undefine, {})

//     function subscribe(callback) {
//         list.push(callback)
//     }

//     function dispatch(action) {
//         state = reducer(state, action)
//         for (var i in list) {
//             list[i] && list[i]()
//         }
//     }

//     function getState() {
//         return state
//     }

//     return {
//         subscribe,
//         dispatch,
//         getState
//     }
// }




// react-redux
// 用于帮助开发者执行订阅和取消订阅等操作，connect函数生成一个高阶组件(父组件)，通过props实现订阅和取消订阅