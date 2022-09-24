/*
 * @Author: Topskys
 * @Date: 2022-09-23 08:48:13
 * @LastEditTime: 2022-09-23 21:05:19
 */
const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHttp = require('express-graphql')

// ---------------Connect MongoDB Server --------------------
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/maizuo", { useNewUrlParser: true, useUnifiedTopology: true })

// 限制 数据库Films（集合表）只能存三个字段
var FilmModel = mongoose.model("Film", new mongoose.Schema({
    name: String,
    poster: String,
    price: Number,
}))
// 操作
// 模型对象.create/.find/.update/.delete

var Schema = buildSchema(`

    type Query{
        getNowPlayingList:[Film],
        getFilmDetail(id:Int!):Film,
    }

    type Mutation{
        createFilm(input:FilmInput):Film
        updateFilm(id:String!, input:FilmInput):Film
        deleteFilm(id:String!):Int
    }

    type Film{
        id: String,
        name: String,
        poster:String,
        price: Int,
    }

    input FilmInput{
        name: String,
        poster:String,
        price: Int,
    }
`)

/**
 * 处理器 database
 * 1.创建模型
 * 2.操作数据库
 */
const root = {
    /**
     * @description: 查询，返回值是一个Promise对象
     * @return {*}
     */
    getNowPlayingList: () => FilmModel.find(),
    /**
     * @description: 添加，异步
     * @param {*} input
     * @return {*}
     */
    createFilm({ input }) {
        return FilmModel.create({ ...input })// FilmModel.create({ ...input }).then(res => console.log(res))
    },
    /**
     * @description: 更新，异步
     * @param {*} id
     * @param {*} input
     * @return {*}
     * updateOne：更新单个
     * updateMany：更新多个
     */
    updateFilm({ id, input }) {
        return FilmModel.updateOne({
            _id: id,
        }, { ...input }).then(res => FilmModel.find({ _id: id }).then(res => res[0]))
    },
    /**
     * @description: 删除，异步
     * @param {*} id
     * @return {*}
     */
    deleteFilm({ id }) {
        return FilmModel.deleteOne({ _id: id }).then(res => 1)
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
// 配置静态资源目录
app.use(express.static("public"))

app.listen(3000)




// mutation{
      // 添加
//    createFilm(input: {
//         name: "T5",
//         poster: "http://localhost/5",
//         price: 89
//     }){
//         id,
//             name,
//             poster,
//             price
//     }

       // 更新
//     updateFilm(id: "632d9540a377535cf8848843", input: {
//         name: "TT55",
//         poster: "http://localhost/55",
//         price: 89
//     }){
//         id,
//             name,
//             poster,
//             price
//     }

        // 删除
        // deleteFilm(id: "632d9540a377535cf8848843")  
// }


// 查询
// query{
//   getNowPlayingList {
//      id,
//      name,
//      poster
//  }
// }