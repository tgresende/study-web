import { topicType } from '../../../reducers/topicReducer/topicTypes'
import { httpGet } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

const getSubjectTopicsUseCaseURL =
  apiBase + 'Topic/GetSubjectTopics/{subjectId}'

const buildUrl = (subjectId: number): string =>
  getSubjectTopicsUseCaseURL.replace('{subjectId}', subjectId.toString())

export async function getSubjectTopicsUseCase(
  subjectId: number
): Promise<topicType[]> {
  const url = buildUrl(subjectId)
  const response = await httpGet(url)
  return response.data as topicType[]
}
