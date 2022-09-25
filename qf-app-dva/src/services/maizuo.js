/*
 * @Author: Topskys
 * @Date: 2022-09-24 20:15:02
 * @LastEditTime: 2022-09-24 20:21:12
 */
import request from "../utils/request";

export function getCinemaListService() {
    return request("https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=9916972", {
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    })
}