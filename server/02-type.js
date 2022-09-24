/*
 * @Author: Topskys
 * @Date: 2022-09-22 10:27:24
 * @LastEditTime: 2022-09-22 11:10:35
 * Query：查询
 */
const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHttp = require('express-graphql')

// 轮廓，样子
// 基本类型String、Int、Float、Boolean、ID
// getFilmDetail(id:Int!)：!为必传参数
var Schema = buildSchema(`

    type Query{
        hello:String,
        getName:String,
        getAge:Int,
        getAllName:[String],
        getAllAge:[Int],
        getAccountInfo:Account,
        getNowPlayingList:[Film],
        getFilmDetail(id:Int!):Film,
    }

    type Account{
        name:String,
        age:Int,
        location:String,
    }

    type Film{
        id: Int,
        name: String,
        poster:String,
        price: Float,
    }
`)
// 处理器
const root = {
    // database
    hello: () => "hello world",
    getName: () => "Topskys",
    getAge: () => 18,
    getAllName: () => ["A", "B", "C", "D"],
    getAllAge: () => [18, 19, 20, 21],
    getAccountInfo() {
        return { name: "Topskys", age: 18, location: "北京" }
    },
    getNowPlayingList: () => faskeDB,
    getFilmDetail({ id }) {
        return faskeDB.filter(item => item.id === id)[0]
    }
}

var faskeDB = [
    {
        id: 1,
        name: "T1",
        poster: "http://localhost/1",
        price: 30.99
    },
    {
        id: 2,
        name: "T2",
        poster: "http://localhost/2",
        price: 3.99
    },
    {
        id: 3,
        name: "T3",
        poster: "http://localhost/3",
        price: 9.99
    }
]


var app = express()
app.use("/graphql", graphqlHttp({
    schema: Schema,
    rootValue: root,
    graphiql: true,
}))
app.listen(3000)


// 查询
// query{
//     hello,
//         getName,
//         getAllAge,
//         getAllName,
//         getAccountInfo {
//         name
//         age
//         location
//     },
//   getNowPlayingList {
//         id,
//             name,
//             price,
//             poster
//     },
//     getFilmDetail(id: 3){
//         id,
//             name,
//             price
//     }
// }
