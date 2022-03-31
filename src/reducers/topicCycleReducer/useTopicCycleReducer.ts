import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { IRootState } from '../../store/storeTypes'
import { topicCycleType, UPDATE_TOPIC_CYCLE } from './topicCycleTypes'

export default function useTopicCycleReducer(
  dispatch: AppDispatch = useDispatch,
  selector = useSelector
) {
  const topicsCycle = selector<IRootState, topicCycleType[]>(
    state => state.topicCycleState.topicsCycle
  )

  const setTopicCycle = (topicsCycle: topicCycleType[]) => {
    dispatch({
      type: UPDATE_TOPIC_CYCLE,
      topicsCycle: topicsCycle,
    })
  }

  return { topicsCycle, setTopicCycle }
}
