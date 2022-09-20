/*
 * @Author: Topskys
 * @Date: 2022-09-12 23:52:34
 * @LastEditTime: 2022-09-13 20:35:28
 */
function hidden() {
    return {
        type: "hidden-tabBar", //randomString
    }
}

function show() {
    return {
        type: "show-tabBar",
    }
}

export {
    show,
    hidden
}