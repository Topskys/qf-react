/*
 * @Author: Topskys
 * @Date: 2022-09-21 21:08:55
 * @LastEditTime: 2022-09-21 21:54:55
 */
const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHttp = require('express-graphql')

// 轮廓，样子
// 基本类型String、Int、Float、Boolean、ID
var Schema = buildSchema(`
    type Query{
        hello:String
        getName:String
        getAge:Int
    }
`)
// 处理器
const root = {
    hello: () => {
        // database
        var str = "hello world"
        return str
    },
    getName: () => "Topskys",
    getAge: () => 18
}


var app = express()

app.use("/home", function (req, res) {
    res.send("Home data")
})

app.use("/list", function (req, res) {
    res.send("list data")
})

app.use("/graphql", graphqlHttp({
    schema: Schema,
    rootValue: root,
    graphiql: true,// 开启调式器
}))

app.listen(3000) //  modified：已修改

// 启动server请求 http://localhost:3000/graphql?
