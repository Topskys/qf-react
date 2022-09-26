<!--
 * @Author: Topskys
 * @Date: 2022-09-25 20:09:00
 * @LastEditTime: 2022-09-25 21:12:44
-->

# qf-router-v6


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## 创建react项目
```
npx create-react-app my-app
cd my-app
npm start
```

## react-router v6
```
npm i react-router-dom
```

## 切换回react17
```
npm install react@17.x react-dom@17.x --save
```

# react-router

react-router︰核心模块，包含React 路由大部分的核心功能，包括路由匹配算法和大部分核心组件和钩子。react-router-dom: React应用中用于路由的软件包，包括react-router的所有内容，并添加了一些特定于DOM的API，包括但不限于BrowserRouter、HashRouter和Link。
o react-router-native: 用于开发React Native应用，包括react-router的所有内容，并添加了一些特定于React Native的API，包括但不限于ativeRouter和Link。

1.相比较v5，v6的体积变小了
2.<Route>特性变更
path:与当前页面对应的URL匹配。
element:新增，用于决定路由匹配时，渲染哪个组件。代替，v5的component和render。
3.<Routes>代替了<switch>
4.<Outlet></Outlet>让嵌套路由更简单
5.useNavigate代替useHistory
6.移除了<NavLink/>的activeClassName和activeStyle7.钩子useRoutes代替react-router-config
8. https://reactrouter.com/docs/en/v6/upgrading/v5
