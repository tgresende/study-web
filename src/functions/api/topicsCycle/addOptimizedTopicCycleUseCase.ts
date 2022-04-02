import { httpSimplePost } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

const buildUrl = (subjectId: number): string =>
  `${apiBase}TopicCycle/AddOptimizedTopicsCycle/${subjectId}`

export async function addOptimizedTopicCycleUseCase(
  subjectId: number
): Promise<void> {
  const url = buildUrl(subjectId)
  alert(url)
  await httpSimplePost(url)
}
