import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
// import watchSaga from './saga' // 写法1
import watchSaga from './saga-takeEvery' // 写法2

const saga=createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(saga))

saga.run(watchSaga) // saga任务

export default store