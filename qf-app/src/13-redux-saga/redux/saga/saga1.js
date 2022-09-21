/*
 * @Author: Topskys
 * @Date: 2022-09-21
 * @LastEditTime: 2022-09-21 10:37:20
 */
import { take, fork, call, put } from 'redux-saga/effects'

/**
 * @description: 监听saga
 */
export default function* watchSaga1() {
    while (true) {
        // take 监听组件发来的action
        yield take("get-list1")
        // fork 同步，非阻塞执行异步处理函数
        yield fork(getList1)
    }
}

function* getList1() {
    // 异步处理
    // call函数异步请求
    // let res = yield call(返回值是Promise对象的函数)// call 阻塞式
    let res = yield call(getListAction1)

    // put函数发出新的action，非阻塞式
    yield put({
        type: 'change-list1',
        payload: res
    })
}

function getListAction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["12345", "fdshjh", "78967"])
        }, 2000)
    })
}