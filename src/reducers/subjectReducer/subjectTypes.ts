export const UPDATE_SUBJECTS = `UPDATE_SUBJECTS`
export const SET_ACTIVE_SUBJECT = `SET_ACTIVE_SUBJECT`

export type SubjectStoreAction = {
  type: string
  subjects: subjectType[]
  activeSubject: subjectType
}

export type subjectType = {
  subjectId: number
  name: string
  weight: number
  annotations: string
}

export interface ISubjectReducerType {
  subjects: subjectType[]
  activeSubject?: subjectType
}
