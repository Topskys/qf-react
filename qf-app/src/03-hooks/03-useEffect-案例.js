import React, { Component,useState,useEffect } from 'react'
import axios from 'axios'

export default class App extends Component {


    state={
        type:1
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.setState({type:1})}>热门</button>
                <button onClick={()=>this.setState({type:2})}>新上映</button>
                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}



/**
 * 函数是组件16 .8- 之前可以使用参数props获取父组件传过来的值
 */
function FilmList(props) {
    const [list, setList] = useState([])

    useEffect(() =>{
        if (props.type === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8849225',
                headers: {
                    'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setList(res.data.data.films)
            })
        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=2828577',
                headers: {
                    'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setList(res.data.data.films)
            })
        }
    },[props.type])


    return(
        <div>
                <ul>
                    {
                        list.map((item) =><li key={item.filmId}>{item.name}</li>)
                    }
                </ul>
            </div>
    )
}

// class FilmList extends Component {
//     state={
//         list: [],
//         type: 1,
//     }

//     /**
//      * DOM已经挂载，只执行一次
//      */    
//     componentDidMount(){
//         if (this.props.type === 1) {
//             axios({
//                 url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8849225',
//                 headers: {
//                     'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
//                     'X-Host': 'mall.film-ticket.film.list'
//                 }
//             }).then(res => {
//                 this.setState({
//                     list: res.data.data.films,
//                 })
//             })
//         } else {
//             axios({
//                 url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=2828577',
//                 headers: {
//                     'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
//                     'X-Host': 'mall.film-ticket.film.list'
//                 }
//             }).then(res => {
//                 this.setState({
//                     list: res.data.data.films,
//                 })
//             })
//         }
//     }


//     static getDerivedStateFromProps(nextProps, nextState) {
//         // 所有传过来的都会在此处理覆盖
//         return {
//             type: nextProps.type // 转换成状态
//         }
//     }


//     componentDidUpdate(prevProps, prevState) {
        
//         if (prevState.type ===this.state.type) {
//             return
//         }

//         if (this.props.type === 1) {
//             axios({
//                 url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8849225',
//                 headers: {
//                     'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
//                     'X-Host': 'mall.film-ticket.film.list'
//                 }
//             }).then(res => {
//                 this.setState({
//                     list: res.data.data.films,
//                 })
//             })
//         } else {
//             axios({
//                 url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=2828577',
//                 headers: {
//                     'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785","bc": "440300"}',
//                     'X-Host': 'mall.film-ticket.film.list'
//                 }
//             }).then(res => {
//                 this.setState({
//                     list: res.data.data.films,
//                 })
//             })
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.state.list.map((item) =><li key={item.filmId}>{item.name}</li>)
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
