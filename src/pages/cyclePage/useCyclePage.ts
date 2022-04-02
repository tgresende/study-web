import React from 'react'
import { finalizeSubjectCycleUseCase } from '../../functions/api/subjectCycle/finalizeSubjectCycleUseCase'
import { addSimpleSubjectCycleUseCase } from '../../functions/api/subjects/addSimpleSubjectCycleUseCase'
import { getSubjectCycleUseCase } from '../../functions/api/subjects/getSubjectCycleUseCase'
import { subjectCycleType } from '../../reducers/subjectCycleReducer/subjectCycleTypes'

export default function useCyclePage() {
  const [subjectsCycle, setSubjectsCycle] = React.useState<subjectCycleType[]>(
    []
  )

  async function generateNewSimpleCycle(projectId: number) {
    await addSimpleSubjectCycleUseCase(projectId).catch(e => alert(e.message))

    await getCycle(projectId)
  }

  async function getCycle(projectId: number) {
    getSubjectCycleUseCase(projectId)
      .then(response => {
        setSubjectsCycle(response)
      })
      .catch(e => alert(e.message))
  }

  async function finalizeSubjectCycle(subjectCycle: subjectCycleType) {
    finalizeSubjectCycleUseCase({ subjectCycleId: subjectCycle.subjectCycleId })
      .then(() => {
        var filtered = subjectsCycle.filter(
          subject => subject.subjectCycleId !== subjectCycle.subjectCycleId
        )
        setSubjectsCycle(filtered)
      })
      .catch(e => alert(e.message))
  }

  const getTimeStudyText = (studyTimeMinutes: number): string =>
    `${studyTimeMinutes} min`

  return {
    generateNewSimpleCycle,
    getCycle,
    getTimeStudyText,
    subjectsCycle,
    setSubjectsCycle,
    finalizeSubjectCycle,
  }
}
