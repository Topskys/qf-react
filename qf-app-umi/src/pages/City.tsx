/*
 * @Author: Topskys
 * @Date: 2022-09-25 16:13:22
 * @LastEditTime: 2022-09-25 17:57:45
 */
import React, { useEffect, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { connect } from 'dva'

function City(props: any) {
    const [cityList, setCityList] = useState<any>([])
    useEffect(() => {
        fetch("https://m.maizuo.com/gateway?k=6916256", {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(response => response.json())
            .then(res => setCityList(filterCity(res.data.cities)))
    }, [])

    const filterCity = (cities: any) => {
        const letters: Array<string> = []
        const newLetters = []
        for (var i = 65; i < 91; i++) {
            letters.push(String.fromCharCode(i))
        }
        for (var m in letters) {
            var cityItems: any = cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase() === letters[m])
            cityItems.length && newLetters.push({
                title: letters[m],
                items: cityItems
            })
        }
        return newLetters
    }

    const changeCity = (item: any) => {
        // console.log(item.name, item.cityId)
        // DvaJS 使用共享状态数据，做兄弟组件传值
        props.dispatch({
            type: "city/changeCityReducer",// "命名空间/reducers方法"
            payload: {
                cityId: item.cityId,
                cityName: item.name
            }
        })
        props.history.push("/cinema")
    }

    return (
        <div style={{ height: window.innerHeight }}>
            <IndexBar>
                {cityList.map((item: any) => {
                    const { title, items } = item
                    return (
                        <IndexBar.Panel
                            index={title}
                            title={`${title}`}
                            key={`${title}`}
                        >
                            <List>
                                {items.map((item: any, index: number) => (
                                    <List.Item key={index} onClick={() => { changeCity(item) }}>{item.name}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
        </div>
    )
}

// 高阶组件，props才会有dispatch() 修改
export default connect(() => ({}))(City)

