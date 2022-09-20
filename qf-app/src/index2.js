/*
 * @Author: Topskys
 * @Date: 2022-09-18 2
 * @LastEditTime: 2022-09-19 16:48:00
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 导入组件
import App from './10-Mobx/04-router/App'

// mobx-react类似react-redux，不用自己写订阅autorun
// npm i mobx-react@5
import {
    Provider
} from 'mobx-react'
import store from './10-Mobx/04-router/mobx/store'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);


reportWebVitals();