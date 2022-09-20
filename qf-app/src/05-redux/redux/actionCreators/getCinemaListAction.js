/*
 * @Author: Topskys
 * @Date: 2022-09-13 23:04:01
 * @LastEditTime: 2022-09-14 09:23:51
 * 安装中间件：npm i redux-thunk/redux-promise
 * 在store中引入使用
 */

import axios from 'axios'

/**
 * @description: 获取影院数据，redux-thunk写法
 * @return {*}
 */
// function getCinemaListAction() {

//     // 返回function让thunk中间件执行，这里的dispatch来自thunk，外挂
//     return (dispatch) => {
//         // 异步
//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=8825245',
//             method: 'GET',
//             headers: {
//                 'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         }).then(res => {
//             // 由于axios是异步请求，所以return对象中的payload没有值undefined，
//             // 需要中间件redux-thunk处理
//             // return {
//             //     type: "change-cinema-list",
//             //     payload: res.data.data.cinemas
//             // }
//             dispatch({
//                 type: "change-cinema-list",
//                 payload: res.data.data.cinemas
//             })
//         })
//     }
// }



/**
 * @description: 获取影院数据，redux-promise写法
 * @return {*}
 */
// function getCinemaListAction() {

//     // 返回promise让redux-promise中间件执行，中间件里面有dispatch
//     return axios({
//         url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=8825245',
//         method: 'GET',
//         headers: {
//             'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
//             'X-Host': 'mall.film-ticket.cinema.list'
//         }
//     }).then(res => {
//         return {
//             type: "change-cinema-list",
//             payload: res.data.data.cinemas
//         }
//     })
// }



/**
 * @description: 获取影院数据，async写法(ES6)
 * @return {*}
 */
async function getCinemaListAction() {

    // 返回promise让redux-promise中间件执行，中间件里面有dispatch
    var res = await axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=8825245',
        method: 'GET',
        headers: {
            'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {
        return {
            type: "change-cinema-list",
            payload: res.data.data.cinemas
        }
    })
    return res
}



export default getCinemaListAction


/**
 * @description: redux-thunk源码
 * @param {*} dispatch
 * @param {*} getState
 * @return {*}
 */
// export default function thunkMiddleWare({dispatch, getState}) {
//     return next => action => {
//         typeof action === "function" ? action(dispatch, getState) : next(action);
//     }
// }