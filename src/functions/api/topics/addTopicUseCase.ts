import { topicType } from '../../../reducers/topicReducer/topicTypes'
import { httpPost } from '../../../utils/api/connection'
import { addTopicUseCaseURL } from '../../../utils/api/url'

export type addTopicUseCaseType = {
  name: string
  annotations: string
  subjectId: number
}

export async function addTopicUseCase(
  topic: addTopicUseCaseType
): Promise<topicType> {
  const url = addTopicUseCaseURL

  const response = await httpPost(url, topic)
  return response.data as topicType
}
