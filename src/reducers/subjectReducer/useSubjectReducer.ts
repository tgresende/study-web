import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { IRootState } from '../../store/storeTypes'
import {
  SET_ACTIVE_SUBJECT,
  subjectType,
  UPDATE_SUBJECTS,
} from './subjectTypes'

export default function useSubjectReducer(
  dispatch: AppDispatch = useDispatch,
  selector = useSelector
) {
  const subjects = selector<IRootState, subjectType[]>(
    state => state.subjectState.subjects
  )

  const activeSubject = selector<IRootState, subjectType | undefined>(
    state => state.subjectState.activeSubject
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

  const setActiveSubject = (subject: subjectType) => {
    dispatch({
      type: SET_ACTIVE_SUBJECT,
      activeSubject: subject,
    })
  }

  return { subjects, addSubject, setSubjects, setActiveSubject, activeSubject }
}
