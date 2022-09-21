/*
 * @Author: Topskys
 * @Date: 2022-09-13 22:54:11
 * @LastEditTime: 2022-09-21 11:44:06
 */
const CinemaListReducer = (prevState = {
    list: [],
}, action) => {
    let newState = {
        ...prevState
    }
    switch (action.type) {
        case 'change-cinema-list':
            newState.list = action.payload
            return newState
        case 'change-cinemaList':
            newState.list = action.payload
            return newState
        default:
            return prevState
    }
}

export default CinemaListReducer