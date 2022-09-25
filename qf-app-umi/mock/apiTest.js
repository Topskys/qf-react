/*
 * @Author: Topskys
 * @Date: 2022-09-25 10:47:39
 * @LastEditTime: 2022-09-25 10:48:53
 * Umi的mock，自动执行，不用像dva需要在导入.roadhogrc.mock.js执行
 */
export default {
    'GET /users': { name: 'Topskys', age: 18, location: 'beijing' },

    'POST /users/login': (req, res) => {
        console.log(req.body);
        if (req.body.username === "admin" && Number(req.body.password) === 123456) {
            res.send({
                ok: true,
                token: "g843hg2838y3hs89x2nha023mxt3"
            })
        } else {
            res.send({
                ok: false,
            })
        }
    }
}