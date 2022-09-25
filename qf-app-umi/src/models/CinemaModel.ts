/*
 * @Author: Topskys
 * @Date: 2022-09-25 17:27:22
 * @LastEditTime: 2022-09-25 19:27:20
 */
export default {
    namespace: 'cinema',

    state: {
        cinemaList: [],
    },

    //异步
    effects: {
        *getCinemaListEffect(action: any, obj: any): any {
            const { put, call } = obj;
            var res = yield call(getCinemaListService, action.payload.cityId);
            yield put({
                type: "changeCinemaListReducer",
                payload: res
            })
        }
    },

    // 同步
    reducers: {
        changeCinemaListReducer(prevState: any, action: any) {
            return {
                ...prevState,
                cinemaList: action.payload
            }
        },
        clearCinemaListReducer(prevState: any, action: any) {
            return {
                ...prevState,
                cinemaList: []
            }
        }
    }
}

async function getCinemaListService(cityId: any) {
    var res = await fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=6796045`, {
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623692341635755474550785","bc":"440300"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => res.json())
    return res.data.cinemas
}