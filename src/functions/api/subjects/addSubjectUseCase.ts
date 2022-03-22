import { subjectType } from '../../../reducers/subjectReducer/subjectTypes'
import { httpPost } from '../../../utils/api/connection'
import { addSubjectsUseCaseURL } from '../../../utils/api/url'

export type insertSubjectType = {
  name: string
  weight: number
  annotations: string
  projectId: number
}

export async function addSubjectsUseCase(
  subject: insertSubjectType
): Promise<subjectType> {
  const url = addSubjectsUseCaseURL
  alert(addSubjectsUseCaseURL)

  const response = await httpPost(url, subject)
  return response.data as subjectType
}
