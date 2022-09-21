import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import watchSaga  from './saga'

const saga=createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(saga))

saga.run(watchSaga) // saga任务

export default store