/*
 * @Author: Topskys
 * @Date: 2022-09-19 09:40:19
 * @LastEditTime: 2022-09-19 10:09:12
 * 字符串，数字，布尔，数组，对象，接口限制数据类型
 */

// 字符串
var name: string = 'Topskys' // 接收字符串类型
name.substring(0, 1)

// 数字
var age: number = 18.800
age.toFixed(1)

// 布尔
var show: boolean = true
show = false

var snVar: string | number = 100

var anyVar: any = 18 // 回到js

// 数组
var list1: string[] = ['1', '2', '3', '4', '5'] // 数组里面只能放string类型
var list2: Array<string> = ['1', '2', '3', '4'] // 泛型写法，数组里面只能放string类型
var list3: (string | number | boolean)[] = ['1', '2', '3', '4', '5']
var list4: Array<string | number | boolean> = [1, 2, 3, '4', false]
var list5: any[] = [1, 2, 3, '4', false]


// 对象
// 接口，限制对象属性的类型
interface IObj {
    name: string,
    age: number,
    show: boolean,
    location?: string,// 可选属性
    [propName: string]: any,// 剩下的属性，如果不知道返回的数据是什么样子或不管剩下属性时
}

var obj1: IObj = {
    name: 'Topskys', age: 18, show: true,
    // 这一段被[propName: string]: any 消耗
    nation: "中国大陆",
    poster: "https://pic.maizuo.com/usr/movie/1ce4633160a172867c415b85e4a1cab3.jpg",
    premiereAt: 1660867200,
    runtime: 127,
    synopsis: "商周之战一千五百年后，天界衰落，蒙冤落魄的杨戬以赏银捕手为业谋生。一日，杨戬接受了一位神秘访客的赏银去追捕一位少年，意外发现少年竟是自己的亲外甥沉香。沉香立志要寻回宝莲灯，劈山救母，却将酿成大祸。杨戬踏上追寻沉香并揭开尘封往事的旅程……",
    timeType: 3,
};





export default {}