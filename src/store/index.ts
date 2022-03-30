import { combineReducers, createStore } from 'redux'
import { subjectCycleReducer } from '../reducers/subjectCycleReducer/subjectCycleReducer'
import { subjectReducer } from '../reducers/subjectReducer/subjectReducer'
import { topicReducer } from '../reducers/topicReducer/topicReducer'
import { IRootState } from './storeTypes'

export type AppDispatch = typeof store.dispatch

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    subjectState: subjectReducer,
    topicState: topicReducer,
    subjectCycleState: subjectCycleReducer,
  })
)
export default store
