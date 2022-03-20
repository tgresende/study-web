import { httpGet } from '../../utils/api/connection'
import { getSubjectsUseCaseURL } from '../../utils/api/url'

export type getSubjectsUseCaseResponse = {
  subjectId: number
  name: string
  weight: number
  annotations: string
}
export async function getSubjectsUseCase(
  projectId: number
): Promise<getSubjectsUseCaseResponse[]> {
  const url = getSubjectsUseCaseURL + projectId.toString()
  return (await httpGet(url)) as getSubjectsUseCaseResponse[]
}
