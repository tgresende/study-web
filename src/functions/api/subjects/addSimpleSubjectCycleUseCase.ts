import { subjectCycleType } from '../../../reducers/subjectCycleReducer/subjectCycleTypes'
import { subjectType } from '../../../reducers/subjectReducer/subjectTypes'
import { httpSimplePost } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

export async function addSimpleSubjectCycleUseCase(
  projectId: number
): Promise<subjectCycleType[]> {
  const url = buildUrl(projectId)
  const response = await httpSimplePost(url)
  return response.data as subjectCycleType[]
}

const addSimpleSubjectCycleUseCaseURL =
  apiBase + 'Subject/AddSimpleSubjectCycle/{projectId}'

const buildUrl = (projectId: number): string =>
  addSimpleSubjectCycleUseCaseURL.replace('{projectId}', projectId.toString())
