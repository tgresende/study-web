import { httpSimplePost } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

const getTopicsCycleUseCaseURL =
  apiBase + 'TopicCycle/AddSimpleTopicsCycle/{subjectId}'

const buildUrl = (subjectId: number): string =>
  getTopicsCycleUseCaseURL.replace('{subjectId}', subjectId.toString())

export async function addSimpleTopicCycleUseCase(
  subjectId: number
): Promise<void> {
  const url = buildUrl(subjectId)
  await httpSimplePost(url)
}
