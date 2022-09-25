/*
 * @Author: Topskys
 * @Date: 2022-09-25 09:23:32
 * @LastEditTime: 2022-09-25 19:28:59
 */
import React, { useEffect } from 'react'
import { NavBar, DotLoading } from 'antd-mobile' // cnpm install --save antd-mobile
import { SearchOutline } from 'antd-mobile-icons'
import { useHistory } from 'umi'
import { connect } from 'dva'

function Cinema(props: any) {
    const history = useHistory()

    useEffect(() => {
        if (props.cinemaList.length === 0) {
            // 取数据
            props.dispatch({
                type: "cinema/getCinemaListEffect",
                payload: {
                    cityId: props.cityId
                }
            })
        } else {
            console.log("缓存")
        }
    }, [])
    return (
        <div>
            <NavBar back={props.cityName} backArrow={false} onBack={() => {
                // 清空老状态的cinemaList，否则cityId变了还是会走缓存
                props.dispatch({
                    type: "cinema/clearCinemaListReducer"
                })

                history.push("/city")// props.history.push("/city")
            }} right={<div style={{ fontSize: 24 }}><SearchOutline /></div>}>影院</NavBar>

            {props.loading && <div style={{ textAlign: 'center' }} ><DotLoading color='primary' /></div>}
            <ul>
                {
                    props.cinemaList.map((item: any) =>
                        <li key={item.cinemaId} style={{ padding: '10px' }}>
                            <b>{item.name}</b>
                            <dd style={{ fontSize: '10px' }}>{item.address}</dd>
                        </li>
                    )
                }
            </ul>
        </div >
    )
}


// 高阶组件
// ../models/CityModel.ts 订阅
// props.a=1111
export default connect((state: any) => {
    return {
        a: 1111,
        cityId: state.city.cityId,
        cityName: state.city.cityName,
        cinemaList: state.cinema.cinemaList,
        loading: state.loading.global,// dva自带的loading插件
    }
})(Cinema)
