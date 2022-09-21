/*
 * @Author: Topskys
 * @Date: 2022-09-21 09:28:41
 * @LastEditTime: 2022-09-21 10:45:06
 */
// 单个saga
// import { take, fork, call, put } from 'redux-saga/effects'

// /**
//  * @description: 监听saga
//  */
// function* watchSaga() {
//     while (true) {
//         // take 监听组件发来的action
//         yield take("get-list")
//         // fork 同步，非阻塞执行异步处理函数
//         yield fork(getList)
//     }
// }

// function* getList() {
//     // 异步处理
//     // call函数异步请求
//     // let res = yield call(返回值是Promise对象的函数)// call 阻塞式
//     let res = yield call(getListAction)

//     // put函数发出新的action，非阻塞式
//     yield put({
//         type: 'change-list',
//         payload: res
//     })
// }

// function getListAction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(["12345", "fdshjh", "78967"])
//         }, 2000)
//     })
// }



// 多个saga
// 合并saga，由于有多个saga，需要合并统一监听
import { all } from 'redux-saga/effects'
import watchSaga1 from './saga/saga1'
import watchSaga2 from './saga/saga2'

function *watchSaga() {
    yield all([watchSaga1(), watchSaga2()])
}



export default watchSaga