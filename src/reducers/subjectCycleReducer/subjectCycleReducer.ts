import {
  ISubjectCycleReducerType,
  SubjectCycleStoreAction,
  subjectCycleType,
  UPDATE_SUBJECT_CYCLE,
} from './subjectCycleTypes'

const initialState: ISubjectCycleReducerType = {
  subjectsCycle: [] as subjectCycleType[],
}

export const subjectCycleReducer = (
  state: ISubjectCycleReducerType = initialState,
  action: SubjectCycleStoreAction
): ISubjectCycleReducerType => {
  switch (action.type) {
    case UPDATE_SUBJECT_CYCLE:
      return {
        ...state,
        subjectsCycle: action.subjectsCycle,
      }
    default:
      return state
  }
}
