import { httpPost } from '../../../../utils/api/connection'
import { apiBase } from '../../../../utils/api/url'

export async function addQuestionUseCase(
  question: addQuestionUseCaseBodyType
): Promise<void> {
  const url = apiBase + 'Question/AddQuestionUseCase'
  await httpPost(url, question)
}

export type addQuestionUseCaseBodyType = {
  topicId: number
  correctQuestions: number
  doneQuestions: number
  revisionItem: string
  revisionCycle: string
  readingItem: string
  readingCycle: string
  lawsItem: string
  lawsCycle: string
  topicCycleId: number
}
