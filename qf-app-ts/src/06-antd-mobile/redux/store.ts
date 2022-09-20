/*
 * @Author: Topskys
 * @Date: 2022-09-20 08:34:04
 * @LastEditTime: 2022-09-20 08:57:41
 */
// npm i redux
import { createStore } from 'redux'

interface IState {
    isShow: boolean
}
interface IAction {
    type: string, payload?: any
}
const reducer = (prevState:IState = { isShow: true }, action: IAction) => {
    const { type } = action
    const newState = { ...prevState }
    switch (type) {
        case "show":
            newState.isShow = true
            return newState
        case "hide":
            newState.isShow = false
            return newState
        default:
            return prevState
    }
}

const store = createStore(reducer)

export default store