/*
 * @Author: Topskys
 * @Date: 2022-09-25 16:56:30
 * @LastEditTime: 2022-09-25 19:39:50
 * 公共状态DvaJS
 * dva集成
 * 按目录约定注册model，无需手动app.model
 * 文件名即namespace，可以省去model导出的namespace key
 * 无需手写router.js，交给umi处理，支持model和component的按需加载
 * 内置query-string 处理，无需再手动解码和编码
 * 内置dva-loading和dva-immer，其中dva-immer需通过配置开启(简化reducer编写)

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