import {
  ISubjectReducerType,
  SubjectStoreAction,
  UPDATE_SUBJECTS,
} from './subjectTypes'

const initialState: ISubjectReducerType = {
  subjects: [],
}

export const subjectReducer = (
  state: ISubjectReducerType = initialState,
  action: SubjectStoreAction
): ISubjectReducerType => {
  switch (action.type) {
    case UPDATE_SUBJECTS:
      return {
        ...state,
        subjects: action.subjects,
      }
    default:
      return state
  }
}
