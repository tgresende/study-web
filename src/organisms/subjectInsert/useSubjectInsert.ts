import React from 'react'
import {
  addSubjectsUseCase,
  insertSubjectType,
} from '../../functions/api/subjects/AddSubjectUseCase'
import { subjectType } from '../../reducers/subjectReducer/subjectTypes'

export default function useSubjectInsert() {
  const [subjectName, setSubjectName] = React.useState<string>('')
  const [subjectWeight, setSubjectWeight] = React.useState<number>(0)
  const [subjectAnnotations, setSubjectAnnotations] = React.useState<string>('')

  async function addSubject(addSubjectReducer: (subject: subjectType) => void) {
    const body = {
      annotations: subjectAnnotations,
      name: subjectName,
      weight: subjectWeight,
      projectId: 1,
    }

    addSubjectsUseCase(body)
      .then(response => addSubjectReducer(response))
      .catch(e => alert(e.message))
  }

  return {
    subjectName,
    setSubjectName,
    subjectWeight,
    setSubjectWeight,
    subjectAnnotations,
    setSubjectAnnotations,
    addSubject,
  }
}
