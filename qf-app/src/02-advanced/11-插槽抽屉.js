/*
 * @Author: Topskys
 * @Date: 2022-09-08
 */
import React, {
    Component
} from 'react'


class NavBar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'green'}}>
                <h1>NavBar</h1>
                {/* 插槽，给button按钮准备位置 */}
                {this.props.children}
            </div>
        )
    }
}


class SideBar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'gold',width:'200px'}}>
                <h1>SideBar</h1>
            </div>
        )
    }
}



export default class App extends Component {
    /**
     * 这里面的东西只能在这里面使用
     * 类组件状态不同于组件属性，属性可以在外边使用
     */    
    state={
        showSideBar: false,
    }
    render() {
        return ( 
            <div>
                {/* 插槽技术 */}
                <NavBar>
                    <button onClick={()=>this.setState({
                        showSideBar:!this.state.showSideBar
                    })}>showSideBar</button>
                </NavBar>
                
                {this.state.showSideBar &&<SideBar></SideBar>}
            </div>
        )
    }
}