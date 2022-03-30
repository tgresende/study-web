import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { IRootState } from '../../store/storeTypes'
import { subjectCycleType, UPDATE_SUBJECT_CYCLE } from './subjectCycleTypes'

export default function useSubjectCycleReducer(
  dispatch: AppDispatch = useDispatch,
  selector = useSelector
) {
  const subjectsCycle = selector<IRootState, subjectCycleType[]>(
    state => state.subjectCycleState.subjectsCycle
  )

  const setSubjectCycles = (subjectsCycle: subjectCycleType[]) => {
    dispatch({
      type: UPDATE_SUBJECT_CYCLE,
      subjectsCycle: subjectsCycle,
    })
  }

  return { subjectsCycle, setSubjectCycles }
}
