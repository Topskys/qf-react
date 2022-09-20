/*
 * @Author: Topskys
 * @Date: 2022-09-11 17:09:17
 * @LastEditTime: 2022-09-14 09:06:48
 * HashRouter：带#号
 * BrowserRouter：真正朝后端发请求要页面，后端没有回应的路径处理路径，就会404，不好看
 */
import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 引入组件
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Search from '../views/Search'
import Login from '../views/Login'
import City from '../views/City'
import Detail from '../views/Detail'
import NotFound from '../views/NotFound'


function  isAuth(){
    return localStorage.getItem('token')
}


export default class MRouter extends Component {
    render() {
        return (
            <div>
                
                {/* <HashRouter> */}
                <Router>
                    {/* <NavLink/>，必修在HashRouter写 */}
                    {this.props.children}
                    {/* 匹配到即停止 */}
                    <Switch>
                        <Route path="/films" component={Films}></Route>
                        <Route path="/cinemas" component={Cinemas} exact></Route>
                        <Route path="/cinemas/search" component={Search}></Route>
                        {/* <Route path="/center" component={Center}></Route> */}
                        <Route path="/login" component={Login}></Route>
                        <Route path="/city" component={City}></Route>
                        
                        {/* 路由拦截，没有props，需要自己传props */}
                        <Route path = "/center"
                        render = {(props) => {
                            return isAuth() ?<Center {...props}/>:<Redirect to="/login"/>
                        }}></Route>

                        {/* 动态路由传参，方式1 */}
                        {/* 路由配置：动态路由，:filmId：占位符；获取：props.match.params.filmId */}
                        <Route path="/detail/:filmId" component={Detail}></Route>
                        
                        {/* <Route path="/detail" component={Detail}></Route> */}
                        {/* 路由传参，不需要占位符，方式2 */}
                        {/* 跳转：this.props.history.push({pathname:'/user',query/state:{filmId:'12345'}}) */}
                        {/* 获取：this.props.location.query/state.filmId */}
                        
                        {/* from='/'：模糊匹配；exact：精确匹配 */}
                        <Redirect from='/' to='/films' exact></Redirect>
                        {/* 404 */}
                        <Route component={NotFound}></Route>
                    </Switch>
                {/* </HashRouter> */}
                </Router>
            </div>
        )
    }
}
