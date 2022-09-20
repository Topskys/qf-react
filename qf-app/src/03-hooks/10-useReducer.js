/*
 * @Author: Topskys
 * @Date: 2022-09-10 23:19:38
 * @LastEditTime: 2022-09-11 14:10:13
 * 跨级通信， 减少组件层级， 降低耦合度
 */
import React,{useReducer,useContext} from 'react'

/**
 * 外部状态对象
 */
const intState={
    // count:0,
    a:'a',
    b:'b',
}

/**
 * 外部处理函数
 */
const reducer =(prevState,action)=>{
    let newState={...prevState}
    // switch(action.type){
    //     case "Topskys-minus":
    //         newState.count--
    //         return newState 
    //         case "Topskys-add":
    //         newState.count++
    //         return newState
    //         default:
    //             return prevState
    // } 

    switch(action.type){
        case "change-a":
            newState.a=action.value
            return newState
            case "change-b":
            newState.b = action.value
            return newState
            default:
                return prevState
    }
}

const GlobalContext=React.createContext()

export default function App() {
    const [state,dispatch]=useReducer(reducer,intState)
    return (
        <div>
            {/* <button onClick={()=>dispatch({type: 'Topskys-minus'})}>-</button> 
            {
                state.count
            }
            <button onClick={()=>dispatch({type: 'Topskys-add'})}>+</button>  */}


            <GlobalContext.Provider value={{state,dispatch}}>
                <Child1></Child1>
                        <Child2></Child2>
                        <Child3></Child3>
            </GlobalContext.Provider>

        </div>
    )
}

function Child1() {
    const {dispatch}=useContext(GlobalContext)
    return <div style={{backgroundColor:'gold'}}>
        <button onClick={()=>dispatch({type: 'change-a',value:'aaa'})}>改变a</button>
        <button onClick={()=>dispatch({type: 'change-b',value:'bbb'})}>改变b</button>
    </div>
}


    

    function Child2() {const {
        state
    } = useContext(GlobalContext)
    return <div style={{backgroundColor:'green'}}>
        child2-{state.a}
    </div>
}



function Child3() {
    const {
        state
    } = useContext(GlobalContext)

    return <div style={{backgroundColor:'blue'}}>
        child3-{state.b}
    </div>
}