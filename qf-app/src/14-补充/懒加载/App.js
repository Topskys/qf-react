/*
 * @Author: Topskys
 * @Date: 2022-09-21 16:18:16
 * @LastEditTime: 2022-09-21 16:32:03
 */
import React, { Component ,Suspense } from 'react'
// 懒加载
const NowPlaying = React.lazy(() => import('./components/NowPlaying'))
const ComingSoon = React.lazy(() => import('./components/ComingSoon'))

export default class Lazy extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ type: 1 }) }}>正在热映</button>
                <button onClick={() => { this.setState({ type: 2 }) }}>即将上映</button>
                {/* 因为使用了懒加载，组件没有显示出来就会出现空白，影响体验，使用<Suspense fallback={<div>正在加载中......</div>}/>组件优化 */}
                <Suspense fallback={<div>正在加载中......</div>}>
                    {this.state.type === 1 ? <NowPlaying /> : <ComingSoon />}
                </Suspense>
            </div>
        )
    }
}


