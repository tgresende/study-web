import { combineReducers, createStore } from 'redux'
import { ISubjectReducerType } from '../reducers/subjectReducer/subjectTypes'
import { subjectReducer } from '../reducers/subjectReducer/subjectReducer'

export interface IRootState {
  subjectState: ISubjectReducerType
}

export type AppDispatch = typeof store.dispatch

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    subjectState: subjectReducer,
  })
)
export default store
