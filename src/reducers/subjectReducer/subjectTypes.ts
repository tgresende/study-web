export const UPDATE_SUBJECTS = `UPDATE_SUBJECTS`

export type SubjectStoreAction = {
  type: string
  subjects: subjectType[]
}

export type subjectType = {
  subjectId: number
  name: string
  weight: number
  annotations: string
}

export interface ISubjectReducerType {
  subjects: subjectType[]
}
