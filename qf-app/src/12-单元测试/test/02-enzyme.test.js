/*
 * @Author: Topskys
 * @Date: 2022-09-20 20:22:09
 * @LastEditTime: 2022-09-20 20:44:15
 * 第三方测试库
 * npm i enzyme
 * 适配器
 * npm i @wojtekmaj/enzyme-adapter-react-17
 */
// 导入测试组件
import App from '../App'
import Enzyme, { shallow, mount } from 'enzyme'// 需要适配器
import adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new adapter() })

describe("react-test-renderer", function () {

    it("描述", function () {
        let app = shallow(<App />)
        expect(app.find("h1").text()).toEqual("单元测试")
    })

    it("删除功能", function () {
        // 因为需要模拟点击，所以要渲染为真实DOM
        const app = mount(<App />);
        let toDoLength = app.find('li').length
        app.find("button.del").at(0).simulate('click');
        expect(app.find("li").length).toEqual(toDoLength - 1)
    })

    it("添加功能", function () {
        // 因为需要模拟点击，所以要渲染为真实DOM
        const app = mount(<App />);
        let toDoLength = app.find('li').length
        let addInput=app.find("input")
        addInput.value ="test add"
        app.find("button.add").at(0).simulate('click');
        expect(app.find("li").length).toEqual(toDoLength + 1)
    })
})
