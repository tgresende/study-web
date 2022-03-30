export const UPDATE_SUBJECT_CYCLE = `UPDATE_SUBJECT_CYCLE`

export type SubjectCycleStoreAction = {
  type: string
  subjectsCycle: subjectCycleType[]
}

export type subjectCycleType = {
  subjectCycleId: number
  subjectId: string
  studyTimeMinutes: number
  subjectName: string
}

export interface ISubjectCycleReducerType {
  subjectsCycle: subjectCycleType[]
}
