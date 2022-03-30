import { subjectCycleType } from '../../../reducers/subjectCycleReducer/subjectCycleTypes'
import { httpGet } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

export async function getSubjectCycleUseCase(
  projectId: number
): Promise<subjectCycleType[]> {
  const url = buildUrl(projectId)
  const response = await httpGet(url)
  return response.data as subjectCycleType[]
}

const addSimpleSubjectCycleUseCaseURL =
  apiBase + 'Subject/GetSubjectCycle/{projectId}'

const buildUrl = (projectId: number): string =>
  addSimpleSubjectCycleUseCaseURL.replace('{projectId}', projectId.toString())
