/*
 * @Author: Topskys
 * @Date: 2022-09-19 17:21:37
 * @LastEditTime: 2022-09-19 17:32:17
 */
// 该接口用于规范类，检查类中是否有关于getName等错误
interface IFun {
    getName: () => string;
    getAge?: () => number;
}

class A implements IFun {
    a1() { }
    a2() { }
    getName() { return 'A' }
}
class B implements IFun {
    b1() { }
    b2() { }
    getName() { return 'B' }
}

function init(obj: IFun) {// any 类型不会被检查
    obj.getName()
}

var objA = new A()
var objB = new B()
init(objA)
init(objB)


class C implements IFun {
    getName() { return "C"; }
}

export default {}