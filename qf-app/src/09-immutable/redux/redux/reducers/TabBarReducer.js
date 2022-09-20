/*
 * @Author: Topskys
 * @Date: 2022-09-13 20:33:03
 * @LastEditTime: 2022-09-17 15:08:01
 * immutable改造
 */

import {
    fromJS
} from 'immutable';

const TabBarReducer = (prevState = fromJS({
    showTabBar: true,
}), action) => {
    // let newState = { ...prevState}
    switch (action.type) {
        case 'hidden-tabBar':
            // newState.showTabBar = false
            return prevState.set("showTabBar", false)
        case 'show-tabBar':
            // newState.showTabBar = true
            return prevState.set("showTabBar", true)
        default:
            return prevState
    }
}

export default TabBarReducer