import { httpSimplePost } from '../../../utils/api/connection'
import { apiBase } from '../../../utils/api/url'

export type finalizeSubjectCycleUseCaseRequestModel = {
  subjectCycleId: number
}

export async function finalizeSubjectCycleUseCase(
  props: finalizeSubjectCycleUseCaseRequestModel
): Promise<void> {
  const url = finalizeSubjectCycleUseCaseURL(props.subjectCycleId)
  await httpSimplePost(url)
}

const finalizeSubjectCycleUseCaseURL = (subjectCycleId: number): string =>
  `${apiBase}SubjectCycle/FinalizeSubjectCycle/${subjectCycleId}`
