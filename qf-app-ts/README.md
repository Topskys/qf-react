# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### TypeScript
1.TypeScript的定位是静态类型语言，在写代码阶段就能检查错误，而非运行阶段，js是动态类型语言，需要运行时才会发现错误。
2.类型系统是最好的文档，增加了代码的可读性和可维护性。
3.有一定的学习成本，需要理解接口(Interfaces)、泛型(Generics)、类(Classes)等4.ts最后被编译成js
2-安装
```
create-react-app my-app --template typescript
```
3-声明
1．可以在当前文件加上declare const $: any;
2．安装npm i @types/jquery @types是npm的一个分支，用来存放*.d.ts文件



### 创建react-ts项目 
```
npx create-react-app qf-app-ts --template typescript
```
ts语法的react项目文件扩展名为.tsx，而js语法的react项目扩展名可以是.js或.jsx。

### 切换TypeScript版本
```
Ctrl+Shift+p
```
由于vscode版本比较低，内置的typescript的版本太低，会报错，可以切换到node_module/的typescript高版本。
