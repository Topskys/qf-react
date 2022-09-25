/*
 * @Author: Topskys
 * @Date: 2022-09-25 09:35:41
 * @LastEditTime: 2022-09-25 11:44:49
 */
import React, { useEffect } from 'react'

export default function ComingSoon() {
    useEffect(() => {
        // https://i.maoyan.com+
        fetch("/api/mmdb/movie/v3/list/hot.json?ct=上海&ci=10&channelId=4")
            .then(response => response.json())
            .then(res => console.log(res))
    }, [])
    return (
        <div>ComingSoon</div>
    )
}
