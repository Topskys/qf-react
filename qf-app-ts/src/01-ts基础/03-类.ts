/*
 * @Author: Topskys
 * @Date: 2022-09-19 17:05:50
 * @LastEditTime: 2022-09-19 17:19:49
 */
class Bus {
    private _list: any = [] // 加下划线表示内部变量，private：私有属性，Bus类内部使用，new Bus()和继承Bus的子类也不能用
    public name: string = 'Topskys' // 公共属性
    protected age: number = 18 // 受保护的属性，只能自己使用或继承使用，Bus类内部、继承Bus的子类使用，new Bus()不能用

    subscribe(cb: any) {
        this._list.push(cb)
    }

    dispatch() {
        this._list.forEach((cb: any) => { cb && cb() })
    }
}

export default {}