/*
 * @Author: Topskys
 * @Date: 2022-09-19 20:35:05
 * @LastEditTime: 2022-09-19 20:43:46
 */
import React, { Component } from 'react'

interface IState {
    isShow: boolean
}
export default class Drawer extends Component<any, IState> {
    state = {
        isShow: true,
    }
    render() {
        return (
            <div>
                <NavBar title="首页" cb={() => {
                    this.setState({isShow: !this.state.isShow})
                }} />
                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}



interface IProps {
    title: string,
    cb: () => void,
}
class NavBar extends Component<IProps, any> {
    render() {
        return (
            <div>
                {this.props.title}
                <button onClick={() => this.props.cb()}>click</button>
            </div>
        )
    }
}



class Sidebar extends Component {
    render() {
        return (
            <div>Sidebar</div>
        )
    }
}
