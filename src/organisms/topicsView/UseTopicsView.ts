import { getSubjectTopicsUseCase } from '../../functions/api/topics/getSubjectTopicsUseCase'
import { topicType } from '../../reducers/topicReducer/topicTypes'

export default function UseTopicsView() {
  async function getSubjectTopics(
    setTopicReducer: (topics: topicType[]) => void,
    subjectId?: number
  ): Promise<void> {
    if (!subjectId) {
      alert('assunto não informado')
      return
    }
    const topics = await getSubjectTopicsUseCase(subjectId)
    setTopicReducer(topics)
  }

  return {
    getSubjectTopics,
  }
}
