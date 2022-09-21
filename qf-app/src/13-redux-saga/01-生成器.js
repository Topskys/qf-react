/*
 * @Author: Topskys
 * @Date: 2022-09-20 22:09:13
 * @LastEditTime: 2022-09-20 23:06:13
 * *生成器，能够让函数中断再执行，*和yield是生成器函数的两大特征
 * ES7将ES6生成器弄成async+await
 */
// 定义生成器函数
function* test() {
    console.log("11")
    var a = yield "输出-1"; // 产出，遇到yield停止，直到再次调用(生成器.next())才往下走
    console.log("22", a)
    var input2 = yield "输出-2";
    console.log("33", input2)
    var input3 = yield "输出-3";
    console.log("33", input3)

}

var Test = test()
console.log(Test.next())// 11 {value: '输出-1', done: false}
console.log(Test.next("a"))// 22 a，传值需要从第二步传，第一步传值无效
console.log(Test.next("b"))
console.log(Test.next("c"))
console.log(Test.next())// {value: undefined, done: true}



function* test1() {

    setTimeout(() => {
        console.log("1-request-success")
        t1.next()
    }, 1000)

    setTimeout(() => {
        console.log("2-request-success")
        // t1.next()
    }, 1000)
}

var t1 = test1();
t1.next()


export default test