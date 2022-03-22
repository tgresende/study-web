import { subjectType } from '../../reducers/subjectReducer/subjectTypes'
import { httpGet } from '../../utils/api/connection'
import { getSubjectsUseCaseURL } from '../../utils/api/url'

export async function getSubjectsUseCase(
  projectId: number
): Promise<subjectType[]> {
  const url = getSubjectsUseCaseURL + projectId.toString()
  const response = await httpGet(url)
  return response.data as subjectType[]
}
