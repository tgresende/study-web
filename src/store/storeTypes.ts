import { ISubjectCycleReducerType } from '../reducers/subjectCycleReducer/subjectCycleTypes'
import { ISubjectReducerType } from '../reducers/subjectReducer/subjectTypes'
import { ITopicReducerType } from '../reducers/topicReducer/topicTypes'

export interface IRootState {
  subjectState: ISubjectReducerType
  topicState: ITopicReducerType
  subjectCycleState: ISubjectCycleReducerType
}
