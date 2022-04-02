import React from 'react'
import { addSubjectsUseCase } from '../../functions/api/subjects/AddSubjectUseCase'
import { subjectType } from '../../reducers/subjectReducer/subjectTypes'

export default function useSubjectInsertDialog() {
  const [subjectName, setSubjectName] = React.useState<string>('')
  const [subjectWeight, setSubjectWeight] = React.useState<number>(0)
  const [subjectAnnotations, setSubjectAnnotations] = React.useState<string>('')

  async function addSubject(
    addSubjectReducer: (subject: subjectType) => void,
    closeComponent: () => void
  ) {
    const body = {
      annotations: subjectAnnotations,
      name: subjectName,
      weight: subjectWeight,
      projectId: 1,
    }

    addSubjectsUseCase(body)
      .then(response => {
        addSubjectReducer(response)
        closeComponent()
      })
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
