/*
 * @Author: Topskys
 * @Date: 2022-09-24 15:55:22
 * @LastEditTime: 2022-09-24 23:03:22
 */
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    history: require("history").createHashHistory() // default hash
    // history: require("history").createBrowserHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/maizuo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
