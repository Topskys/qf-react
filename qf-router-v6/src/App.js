/*
 * @Author: Topskys
 * @Date: 2022-09-25 20:09:00
 * @LastEditTime: 2022-09-26 10:30:24
 */
import './App.css';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import MRouter from './router'
import TabBar from './components/TabBar.jsx'

function App() {
  return (
    <BrowserRouter>
      <MRouter></MRouter>
      <TabBar></TabBar>
    </BrowserRouter>
  );
}

export default App;
