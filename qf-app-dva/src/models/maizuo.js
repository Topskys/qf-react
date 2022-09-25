/*
 * @Author: Topskys
 * @Date: 2022-09-24 15:55:22
 * @LastEditTime: 2022-09-24 20:38:56
 */
import { getCinemaListService } from '../services/maizuo'

export default {

  namespace: 'maizuo',

  state: {
    isShow: true,
    cinemaList: [],
  },

  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log("初始化")
    },
  },

  // 异步-redux-saga
  effects: {
    *getCinemaList(action, { call, put }) {
      var res = yield call(getCinemaListService) // call(Promise对象)
      yield put({// put给下一个操作
        type: 'changeCinemaList',// reducers:{changeCinemaList()}
        payload: res.data.data.cinemas
      })
    }
  },

  // 同步
  reducers: {
    hide(prevState, action) {
      return { ...prevState, isShow: false };
    },
    show(prevState, action) {
      return { ...prevState, isShow: true };
    },
    changeCinemaList(prevState, { payload }) {
      return { ...prevState, cinemaList: payload };
    }
  },

};
