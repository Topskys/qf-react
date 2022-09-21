/*
 * @Author: Topskys
 * @Date: 2022-09-21 11:03:05
 * @LastEditTime: 2022-09-21 11:16:48
 */
import { takeEvery } from 'redux-saga/effects'
import {getList1} from './saga/saga1'
import {getList2} from './saga/saga2'

function* watchSaga() {
    yield takeEvery("get-list1", getList1)
    yield takeEvery("get-list2", getList2)
}



export default watchSaga