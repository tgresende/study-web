import { addSimpleSubjectCycleUseCase } from '../../functions/api/subjects/addSimpleSubjectCycleUseCase'
import { getSubjectCycleUseCase } from '../../functions/api/subjects/getSubjectCycleUseCase'
import { subjectCycleType } from '../../reducers/subjectCycleReducer/subjectCycleTypes'

export default function useCyclePage() {
  async function generateNewSimpleCycle(
    addSubjectCycleReducer: (subjectsCycle: subjectCycleType[]) => void,
    projectId: number
  ) {
    await addSimpleSubjectCycleUseCase(projectId)
      .then(response => addSubjectCycleReducer(response))
      .catch(e => alert(e.message))
  }

  async function getCycle(
    addSubjectCycleReducer: (subjectsCycle: subjectCycleType[]) => void,
    projectId: number
  ) {
    getSubjectCycleUseCase(projectId)
      .then(response => addSubjectCycleReducer(response))
      .catch(e => alert(e.message))
  }

  return {
    generateNewSimpleCycle,
    getCycle,
  }
}
