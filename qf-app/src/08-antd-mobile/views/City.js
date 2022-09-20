/*
 * @Author: Topskys
 * @Date: 2022-09-13 19:53:05
 * @LastEditTime: 2022-09-14 20:56:13
 */
import React, {
    useState
} from 'react'
// import store from '../redux/store'
import {
    connect
} from 'react-redux'

/**
 * @description: 切换城市
 * @param {*} props
 * @return {*}
 */
function City(props) {

    const [list, setList] = useState(["北京", "上海", "深圳", "广州", "重庆"])

    return (
        <div>
            <ul>
                {
                    list.map((item=><li onClick={()=>{
                        // store.dispatch({type: 'change-city',payload: item})
                        props.changeCity(item)
                        // props.history.push('/cinemas')
                        props.history.goBack()
                    }} key={item}>{item}</li>))
                }
            </ul>
        </div>
    )
}




const mapDispatchToProps = {
    changeCity(item) {
        return {
            type: 'change-city',
            payload: item
        }
    }
}
export default connect(null, mapDispatchToProps)(City)

