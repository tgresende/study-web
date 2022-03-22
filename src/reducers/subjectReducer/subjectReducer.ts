import {
  ISubjectReducerType,
  SET_ACTIVE_SUBJECT,
  SubjectStoreAction,
  subjectType,
  UPDATE_SUBJECTS,
} from './subjectTypes'

const initialState: ISubjectReducerType = {
  subjects: [] as subjectType[],
  activeSubject: undefined,
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
    case SET_ACTIVE_SUBJECT:
      return {
        ...state,
        activeSubject: action.activeSubject,
      }
    default:
      return state
  }
}
