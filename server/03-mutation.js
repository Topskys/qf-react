/*
 * @Author: Topskys
 * @Date: 2022-09-22 11:03:03
 * @LastEditTime: 2022-09-22 11:54:43
 * Mutation：修改
 */
const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHttp = require('express-graphql')

var Schema = buildSchema(`

    type Query{
        getNowPlayingList:[Film],
        getFilmDetail(id:Int!):Film,
    }

    type Mutation{
        createFilm(input:FilmInput):Film
        updateFilm(id:Int!, input:FilmInput):Film
        deleteFilm(id:Int!):Int
    }

    type Film{
        id: Int,
        name: String,
        poster:String,
        price: Float,
    }

    input FilmInput{
        name: String,
        poster:String,
        price: Float,
    }
`)
// 处理器
const root = {
    // database
    getNowPlayingList: () => faskeDB,
    getFilmDetail({ id }) {
        return faskeDB.filter(item => item.id === id)[0]
    },
    createFilm({ input }) {
        var obj = { ...input, id: faskeDB.length + 1 }
        faskeDB.push(obj)
        return obj
    },
    updateFilm({ id, input }) {
        var current = null;
        faskeDB = faskeDB.map(item => {
            if (item.id === id) {
                current = { ...item, ...input }
                return { ...item, ...input }
            }
            return item
        })
        return current
    },
    deleteFilm({ id }) {
        faskeDB = faskeDB.filter(item => item.id !== id)
        return 1
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

//添加
// mutation{
//     createFilm(input: {
//         name: "T4",
//         price: 7.08,
//         poster: "http://localhost/4"
//     }){
//         id,
//             name,
//             poster,
//             price
//     }
// }

// 修改
// mutation{
//     updateFilm(id: 1, input: {
//         name: "updateT1",
//         price: 77.08,
//         poster: "http://localhost/11.img"
//     }){
//         id,
//             name,
//             poster,
//             price
//     }
// }

// 删除
// mutation{
//    deleteFilm(id: 1)
// }