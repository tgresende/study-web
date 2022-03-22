import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../../store'
import { subjectType, UPDATE_SUBJECTS } from './subjectTypes'

export default function useSubjectReducer(
  dispatch: AppDispatch = useDispatch,
  selector = useSelector
) {
  const subjects = selector<IRootState, subjectType[]>(
    state => state.subjectState.subjects
  )

  const addSubject = (subject: subjectType) => {
    dispatch({
      type: UPDATE_SUBJECTS,
      subjects: [...subjects, subject],
    })
  }

  const setSubjects = (subjects: subjectType[]) => {
    dispatch({
      type: UPDATE_SUBJECTS,
      subjects: subjects,
    })
  }

  return { subjects, addSubject, setSubjects }
}
