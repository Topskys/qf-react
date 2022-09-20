/*
 * @Author: Topskys
 * @Date: 2022-09-18 16:35:36
 * @LastEditTime: 2022-09-18 23:09:30
 */
import {
    observable,
    configure,
    action,
    runInAction,
} from 'mobx'
import axios from 'axios'

// 严格模式，不允许在文件外部或异步直接修改状态
configure({
    enforceActions: 'always'
})

// 写法1
// const store = observable({
//     showTabBar: true,
//     list: [],
//     city: '深圳',
//     changeShowTabBar() {
//         this.showTabBar = true
//     },
//     changeHideTabBar() {
//         this.showTabBar = false
//     },
// }, {
//     // 将方法标记为action，专门修改可观测的value
//     changeShowTabBar: action,
//     changeHideTabBar: action,
// })


// 写法2-OOP
// @为ES7装饰器，装饰器未开启，会报错
// 1.配置编译器支持装饰器，setting.experimentalDecorators:true
// 2.让react工程支持装饰器
// npm i @babel/core @babel/plugin-proposal-decorators @babel/preset-env
// 在项目根目录创建配置.babelrc 
// 在项目根目录创建配置config-overrides.js
class Store {
    @observable showTabBar = true
    @observable list = []

    @action changeShowTabBar() {
        // 同步，可以this属性修改
        this.showTabBar = true
    }
    @action changeHideTabBar() {
        this.showTabBar = false
    }
    @action async getCinemaList() {
        var list = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=8825245',
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            // 异步，不可以直接this属性修改，
            // this.list = res.data.data.cinemas
            // 需要引入runInAction
            // runInAction(() => {
            //     this.list = res.data.data.cinemas
            // })
            // async
            return res.data.data.cinemas
        })
        // async
        runInAction(() => {
            this.list = list
        })
    }
}

// export default store // 导出对象
export default new Store() // 导出类