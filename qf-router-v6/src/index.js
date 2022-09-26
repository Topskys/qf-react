/*
 * @Author: Topskys
 * @Date: 2022-09-25 20:09:00
 * @LastEditTime: 2022-09-25 20:56:53
 */
import React from 'react';
// import ReactDOM from 'react-dom/client';// react@18
import ReactDOM from 'react-dom'; // react@17
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


reportWebVitals();
