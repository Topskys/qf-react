/*
 * @Author: Topskys
 * @Date: 2022-09-24 22:47:26
 * @LastEditTime: 2022-09-24 23:06:00
 * // 利用mock作模拟请求
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