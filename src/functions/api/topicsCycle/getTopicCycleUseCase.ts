import { topicCycleType } from '../../../reducers/topicCycleReducer/topicCycleTypes'
import { httpGet } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

const getTopicsCycleUseCaseURL =
  apiBase + 'TopicCycle/GetTopicsCycle/{subjectId}'

const buildUrl = (subjectId: number): string =>
  getTopicsCycleUseCaseURL.replace('{subjectId}', subjectId.toString())

export async function getTopicsCycleUseCase(
  subjectId: number
): Promise<topicCycleType[]> {
  const url = buildUrl(subjectId)
  const response = await httpGet(url)
  return response.data as topicCycleType[]
}
