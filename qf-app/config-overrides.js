/*
 * @Author: Topskys
 * @Date: 2022-09-18 17:35:07
 * @LastEditTime: 2022-09-18 17:49:33
 */
// 让react支持装饰器语法@
const path = require('path')
const {
    override,
    addDecoratorsLegacy
} = require('customize-cra')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const customize = () => (config, env) => {
    config.resolve.alias['@'] = resolve('src')
    if (env === 'production') {
        config.externals = {
            'react': 'React',
            'react-dom': "ReactDOM"
        }
    }
    return config
}

module.exports = override(addDecoratorsLegacy(), customize())

// 安装依赖 npm i customize-cra react-app-rewired
// 修改启动文件package.json 
// "scripts": {
//     "start": "react-app-rewired start",
//     "build": "react-app-rewired build",
//     "test": "react-app-rewired test",
//     "eject": "react-app-rewired eject"
// },

// 原来的
// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject"