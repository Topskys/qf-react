/*
 * @Author: Topskys
 * @Date: 2022-09-19 21:31:33
 * @LastEditTime: 2022-09-19 22:22:54
 */
import React, { Component } from 'react'
// 报错，编译器需要声明文档才会纠错，npm i --save-dev @types/react-router-dom@5
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

// 导入组件组建路由
import Film from '../views/Film'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Detail from '../views/Detail'

export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/film" component={Film} />
                    <Route path="/cinemas" component={Cinemas} />
                    <Route path="/Center" component={Center} />
                    <Route path="/detail/:filmId" component={Detail} />

                    <Redirect from="/" to="/film"></Redirect>
                </Switch>

            </HashRouter>
        )
    }
}
