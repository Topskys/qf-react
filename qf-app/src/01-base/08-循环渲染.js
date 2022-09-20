/*
 * @Author: Topskys
 * @Date: 2022-09-05 11:49:51
 * 08-循环渲染
 */
import React, {
    Component
} from 'react'

export default class App extends Component {

    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    render() {
        /**
         * js原生映射 - map()
         * key：方便diff对比，避免相同，如果数组没有新增、删除、重排等时(索引不发生变化)，key值可为index索引值
         */
        var newList =this.state.list.map(item => <li key={item}>{item}</li>)

        return ( 
            <div>
                <ul>
                    {
                        // this.state.list.map(item => <li key={item}>{item}</li>)
                        newList
                    }
                </ul> 
            </div>
        )
    }
}




