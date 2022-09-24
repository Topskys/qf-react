/*
 * @Author: Topskys
 * @Date: 2022-09-23 08:48:13
 * @LastEditTime: 2022-09-24 09:04:18
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
        getNowPlayingList(id:String!):[Film],
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

    getNowPlayingList({ id }) {
        if (id){
            return FilmModel.find({ _id: id })
        }else{
            return FilmModel.find()
        }
    },

    createFilm({ input }) {
        return FilmModel.create({ ...input })// FilmModel.create({ ...input }).then(res => console.log(res))
    },

    updateFilm({ id, input }) {
        return FilmModel.updateOne({
            _id: id,
        }, { ...input }).then(res => FilmModel.find({ _id: id }).then(res => res[0]))
    },

    deleteFilm({ id }) {
        return FilmModel.deleteOne({ _id: id }).then(res => 1)
    }
}

var app = express()
app.use("/graphql", graphqlHttp({
    schema: Schema,
    rootValue: root,
    graphiql: true,
}))
// 配置静态资源目录
app.use(express.static("public"))

app.listen(3000)
