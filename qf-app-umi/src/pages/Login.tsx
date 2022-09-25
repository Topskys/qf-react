/*
 * @Author: Topskys
 * @Date: 2022-09-25 10:40:36
 * @LastEditTime: 2022-09-25 11:05:23
 */
import React from 'react'
import { useHistory } from 'umi'


export default function Login(props: any) {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const history = useHistory()


    return (
        <div>
            username:<input type="text" onChange={(e) => { setUsername(e.target.value) }} /><br />
            password:<input type="password" onChange={(e) => { setPassword(e.target.value) }} /><br />
            <button onClick={() => {
                // 利用mock作模拟请求
                fetch("/users/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                }).then(res=>res.json()).then((res: any) => {
                    console.log(res)
                    if (res.ok) {
                        localStorage.setItem('token', res.token)
                        history.push("/center")// props.history.push("/center")
                    } else {
                        alert("username or password is incorrect")
                    }

                })

            }}>登录</button>
        </div>
    )

}

