/*
 * @Author: Topskys
 * @Date: 2022-09-20 23:30:41
 * @LastEditTime: 2022-09-21 10:40:41
 */
function reducer(prevState = { list1: [], list2:[] }, action) {
    var newState = { ...prevState }
    switch (action.type) {
        case "change-list1":
            // console.log("change-list1::", action)
            newState.list1 = action.payload
            return newState
        case "change-list2":
            newState.list2 = action.payload
            return newState
        default:
            return prevState
    }
}

export default reducer