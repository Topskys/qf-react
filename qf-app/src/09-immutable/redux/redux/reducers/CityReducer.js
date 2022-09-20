/*
 * @Author: Topskys
 * @Date: 2022-09-13 20:37:28
 * @LastEditTime: 2022-09-17 15:13:20
 */
import {
    createStore
} from 'redux'

import{fromJS} from 'immutable'

const CityReducer = (prevState = {
    city: '深圳',
}, action) => {
    // let newState = {...prevState}
    let newState = fromJS(prevState)
    switch (action.type) {
        case 'change-city':
            // newState.city = action.payload
            return newState.set("city", action.payload).toJS() // 返回普通对象
        default:
            return prevState
    }
}


export default CityReducer