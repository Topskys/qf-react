/*
 * @Author: Topskys
 * @Date: 2022-09-21 09:28:41
 * @LastEditTime: 2022-09-21 11:06:53
 */
import { take, fork, call, put, takeEvery } from 'redux-saga/effects'

/**
 * @description: 监听saga
 */
export default function* watchSaga2() {
    // while (true) {
    //     // take 监听组件发来的action
    //     yield take("get-list2")
    //     // fork 同步，非阻塞执行异步处理函数
    //     yield fork(getList2)
    // }
    // 简写
    // yield takeEvery("get-list2", getList2) // saga-takeEvery.js
}

function* getList2() {// saga-takeEvery.js 直接调用
    // 异步处理
    // call函数异步请求
    // let res = yield call(返回值是Promise对象的函数)// call 阻塞式
    // 链式调用
    let res1 = yield call(getListAction2_1)
    let res2 = yield call(getListAction2_2, res1)

    // put函数发出新的action，非阻塞式
    yield put({
        type: 'change-list2',
        payload: res2
    })
}

function getListAction2_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["678910", "fsfdjg", "32546"])
        }, 2000)
    })
}
function getListAction2_2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([...data, "guguih", "589", "32546"])
        }, 2000)
    })
}


export {
    getList2
}