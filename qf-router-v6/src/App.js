/*
 * @Author: Topskys
 * @Date: 2022-09-25 20:09:00
 * @LastEditTime: 2022-09-26 23:17:12
 */
import './App.css';
import { HashRouter, BrowserRouter } from 'react-router-dom'
// import MRouter from './router'
import MRouter from './router/index_useRoutes'
import TabBar from './components/TabBar.jsx'

// BrowserRouter模式：需要后端处理路径，作判断，如果不能渲染前端所请求的页面，就重新渲染index.html。


function App() {
  return (
    <BrowserRouter>
      <MRouter></MRouter>
      <TabBar></TabBar>
    </BrowserRouter>
  );
}

export default App;
