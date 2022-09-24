/*
 * @Author: Topskys
 * @Date: 2022-09-04 22:22:33
 * @LastEditTime: 2022-09-23 21:44:26
 * npm install --save antd-mobile
 */
import React from 'react';
// import ReactDOM from 'react-dom/client';// react@18
import ReactDOM from 'react-dom'; // react@17
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// 导入组件
// import App from './10-Mobx/04-router/App'
import App from './15-GraphQL/App'


// 导入react-redux需要提供的最外层服务store
// import store from './06-react-redux/redux/store'
// import {
//     Provider
// } from 'react-redux';

// redux-persist 持久化
// import {
//     PersistGate
// } from 'redux-persist/integration/react'
// import {
//     store,
//     persistor
// } from './08-antd-mobile/redux/store'


// mobx-react类似react-redux，不用自己写订阅autorun
// npm i mobx-react@5
// import {
//     Provider
// } from 'mobx-react'
// import store from './10-Mobx/04-router/mobx/store'


// 引入antd全局样式
// import "antd/dist/antd.css"; // pc样式，mobile不用手动引入，已经集成到组件中




ReactDOM.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode >
    , document.getElementById('root')
);




// 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//   <React.StrictMode >
//     <App / >
//   </React.StrictMode>
// );


//17
// ReactDOM.render(
//     // <React.StrictMode>
//     <Provider store = {store} >
//     <App / >
//     </Provider>,
//     // </React.StrictMode>,
//     document.getElementById('root')
// );



// 持久化，修改
// PersistGate：persist网关
// ReactDOM.render(
//     // <React.StrictMode>
//     <Provider store={store} >
//         <PersistGate loading={null} persistor={persistor}>
//             <App />
//         </PersistGate>
//     </Provider>
//     // </React.StrictMode>
//     , document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();