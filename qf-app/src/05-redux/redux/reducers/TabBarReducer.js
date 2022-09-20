/*
 * @Author: Topskys
 * @Date: 2022-09-13 20:33:03
 * @LastEditTime: 2022-09-13 20:34:33
 */
const TabBarReducer = (prevState = {
    showTabBar: true,
}, action) => {
    let newState = {
        ...prevState
    }
    switch (action.type) {
        case 'hidden-tabBar':
            newState.showTabBar = false
            return newState
        case 'show-tabBar':
            newState.showTabBar = true
            return newState
        default:
            return prevState
    }
    return prevState
}

export default TabBarReducer