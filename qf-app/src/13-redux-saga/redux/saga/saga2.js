/*
 * @Author: Topskys
 * @Date: 2022-09-21 09:28:41
 * @LastEditTime: 2022-09-21 10:44:00
 */
import { take, fork, call, put } from 'redux-saga/effects'

/**
 * @description: 监听saga
 */
export default function* watchSaga2() {
    while (true) {
        // take 监听组件发来的action
        yield take("get-list2")
        // fork 同步，非阻塞执行异步处理函数
        yield fork(getList2)
    }
}

function* getList2() {
    // 异步处理
    // call函数异步请求
    // let res = yield call(返回值是Promise对象的函数)// call 阻塞式
    let res = yield call(getListAction2)

    // put函数发出新的action，非阻塞式
    yield put({
        type: 'change-list2',
        payload: res
    })
}

function getListAction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["678910", "fsfdjg", "32546"])
        }, 2000)
    })
}