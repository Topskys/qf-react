/*
 * @Author: Topskys
 * @Date: 2022-09-21 11:30:22
 * @LastEditTime: 2022-09-21 11:47:22
 */
import { call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* watchSaga() {
    yield takeEvery("get-cinemaList", getCinemaList)
}

function* getCinemaList() {
    let res = yield call(getListAction)

    yield put({
        type: 'change-cinemaList',
        payload: res
    })
}

function getListAction() {
    return axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=8825245',
        method: 'GET',
        headers: {
            'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {
        return res.data.data.cinemas
    })
}



export default watchSaga