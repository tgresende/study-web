import { httpGet } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

const getTopicAnnotationItemsUseCaseURL =
  apiBase + 'Topic/GetTopicAnnotation/{topicId}'

const buildUrl = (topicId: number): string =>
  getTopicAnnotationItemsUseCaseURL.replace('{topicId}', topicId.toString())

export type TopicAnnotationType = {
  topicId: number
  name: 'string'
  annotations: 'string'
  subjectId: number
  revisionItem: 'string'
  revisionCycle: 'string'
  readingItem: 'string'
  readingCycle: 'string'
  lawsItem: 'string'
  lawsCycle: 'string'
}

export async function getTopicAnnotationItemsUseCase(
  topicId: number
): Promise<TopicAnnotationType> {
  const url = buildUrl(topicId)
  const response = await httpGet(url)
  return response.data as TopicAnnotationType
}
