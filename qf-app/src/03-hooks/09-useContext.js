/*
 * @Author: Topskys
 * @Date: 2022-09-10 22:48:23
 * @LastEditTime: 2022-09-10 23:16:12
 * useContext：跨级通信，减少组件层级
 */
import React, { Component,useState,useEffect,useContext } from 'react'

import axios from 'axios'

import './css/02-communication.css'

/**
 * 受控组件，电影列表
 */
function FilmItem(props){
    let {name,poster,grade,synopsis}=props
    const value = useContext(GlobalContext)
    return <div  style = {{float: 'left', width: '200px'}}
                            onClick = {() => value.changeInfo(synopsis)} >
                                <img src={poster}/>
                                <h4>{name}</h4>
                                <p>观众平分：{grade?grade:0}</p>
                            </div>
}

// class FilmItem extends Component {
//     render() {
        
//         return (
//             <GlobalContext.Consumer>
//                 {/* GlobalContext.Consumer：插槽 */}
//                 {
//                     // 消费者A，这里必须是callback()
//                     (sendService)=>{
//                         return <div  style = {{float: 'left', width: '200px'}}
//                             onClick = {() => sendService.changeInfo(synopsis)} >
//                                 <img src={poster}/>
//                                 <h4>{name}</h4>
//                                 <p>观众平分：{grade?grade:0}</p>
//                             </div>
//                     }
//                 }
//             </GlobalContext.Consumer>
//         )
//     }
// }





/**
 * 受控组件，显示电影详情
 */
function FilmDetail(){
    const value = useContext(GlobalContext)

    return (<div className="filmDetail">{value.info}</div>)
}

// class FilmDetail extends Component{
//     render() {
//         return (
//             <GlobalContext.Consumer>
//                 {
//                     // 消费者B
//                     (useService)=><div className="filmDetail">{useService.info}</div>
//                 }
//             </GlobalContext.Consumer>
            
//         )
//     }
// }

// 创建context对象



export default function App() {
    const [filmList,setFilmList]= useState([])
    const [info,setInfo] = useState("")

    useEffect(() =>{
axios({
                        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3775329',
                        method: 'GET',
                            headers: {
                                // , "bc": "440300"
                                'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785"}',
                                'X-Host': 'mall.film-ticket.film.list'
                            }
                    }).then(res => {
                        setFilmList(res.data.data.films)
                    })
    },[])

    return (
                        // 供应商
                        <GlobalContext.Provider value={{
                            call: '打电话',
                                online: "上网",
                                info: info,
                                changeInfo:(value) => setInfo(value)
                        }}>
                            <div>
                                {filmList.map(item =>
                                <FilmItem key={item.filmId} {...item} 
                                >
                                </FilmItem>)}

                                <FilmDetail></FilmDetail>
                            </div>
                        </GlobalContext.Provider>

                    )
}



const GlobalContext=React.createContext()


// export default class App extends Component {

//     constructor(){
//         super()

//         this.state={
//             filmList:[],
//             info:'',
//         }

//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3775329',
//             method: 'GET',
//                 headers: {
//                     // , "bc": "440300"
//                     'X-Client-Info': '{"a": "3000","ch": "1002","v": "5.2.1","e": "16623692341635755474550785"}',
//                     'X-Host': 'mall.film-ticket.film.list'
//                 }
//         }).then(res => {
//             this.setState({
//                 filmList: res.data.data.films
//             })
//         })
//     }

//     render() {
//         return (
//             // 供应商
//             <GlobalContext.Provider value={{
//                 call: '打电话',
//                     online: "上网",
//                     info: this.state.info,
//                     changeInfo:(value) => {this.setState({info: value})}
//             }}>
//                 <div>
//                     {this.state.filmList.map(item =>
//                     <FilmItem key={item.filmId} {...item} 
//                     onEvent={(value) =>{this.setState({info:value})}}>
//                     </FilmItem>)}
                    
//                     <FilmDetail></FilmDetail>
//                 </div>
//             </GlobalContext.Provider>
        
//         )
//     }
// }

