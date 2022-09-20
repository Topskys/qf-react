/*
 * @Author: Topskys
 * @Date: 2022-09-19 16:16:23
 * @LastEditTime: 2022-09-19 16:26:38
 */

/**
 * @description: TS函数
 * @param {string} a
 * @param {string} b
 * @param {number} c
 * @return {string}
 */
function test1(a: string, b: string, c?: number): string {
    console.log(a.substring(0, 1), b.substring(0, 1))
    return a.substring(0, 1), b.substring(0, 1)
}
var tt1: string = test1("aaaaa", "bbbb", 100)



interface IFun {
    (a: string, b: string, c?: number): string
}
var tt2: IFun = function test1(a: string, b: string, c?: number): string {
    console.log(a.substring(0, 1), b.substring(0, 1))
    return a.substring(0, 1), b.substring(0, 1)
}



interface IObj {
    name: string,
    age: number,
    getName: (name: string) => string
}
var obj: IObj = {
    name: "Topskys",
    age: 18,
    getName: (name: string) => { return name }
}
obj.getName("Jobs")


export default {}