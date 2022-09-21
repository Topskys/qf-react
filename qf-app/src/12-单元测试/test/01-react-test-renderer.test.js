/*
 * @Author: Topskys
 * @Date: 2022-09-20 17:58:00
 * @LastEditTime: 2022-09-20 20:18:13
 * 运行
 * npm test
 */
// 浅测试库，一层测试
import ShallowRender from 'react-test-renderer/shallow'
// 导入测试组件
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils'

describe("react-test-renderer", function () {

    it("描述", function () {
        const render = new ShallowRender()
        render.render(<App />)
        // console.log(render.getRenderOutput().props)
        // expect() 期望，断言
        // toBe() 等于
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
        expect(render.getRenderOutput().props.children[0].props.children).toBe("单元测试")
    })

    it("删除功能", function () {
        // 因为需要模拟点击，所以要渲染为真实DOM
        const app = ReactTestUtil.renderIntoDocument(<App />);
        let toDoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
        // console.log(toDoItems.length)

        let deleteButton = toDoItems[0].querySelector("button")
        ReactTestUtil.Simulate.click(deleteButton)
        let toDoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')

        expect(toDoItems.length - 1).toBe(toDoItemsAfterClick.length)
    })

    it("添加功能", function () {
        // 因为需要模拟点击，所以要渲染为真实DOM
        const app = ReactTestUtil.renderIntoDocument(<App />);
        let toDoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li') // 返回数组
        // console.log(toDoItems.length)

        let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'input')
        addInput.value = "test 添加功能"
        let addButton = ReactTestUtil.findRenderedDOMComponentWithClass(app, 'add') // 返回一个
        ReactTestUtil.Simulate.click(addButton)
        let toDoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')

        expect(toDoItems.length + 1).toBe(toDoItemsAfterClick.length)
    })
})
