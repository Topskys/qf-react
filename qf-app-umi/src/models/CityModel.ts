/*
 * @Author: Topskys
 * @Date: 2022-09-25 16:56:30
 * @LastEditTime: 2022-09-25 17:57:03
 * 公共状态DvaJS
 */
export default {
    namespace: 'city', // 命名空间，不写umi会将文件名作为namespace
    state: {
        cityId: "110100",
        cityName: "北京",
    },

    // 同步
    reducers: {
        // ../pages/City.tsx
        // props.dispatch({
        //     type: "city/changeCityReducer",
        //     payload: {
        //         cityId: item.cityId,
        //         cityName: item.cityName
        //     }
        // })
        changeCityReducer(prevState: any, action: any) {
            return {
                ...prevState,
                cityId: action.payload.cityId,
                cityName: action.payload.cityName
            }
        }
    }
}