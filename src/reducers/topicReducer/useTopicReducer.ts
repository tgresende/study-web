import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { IRootState } from '../../store/storeTypes'
import { topicType, UPDATE_TOPICS } from './topicTypes'

export default function useTopicReducer(
  dispatch: AppDispatch = useDispatch,
  selector = useSelector
) {
  const topics = selector<IRootState, topicType[]>(
    state => state.topicState.topics
  )

  const addTopic = (topic: topicType) => {
    dispatch({
      type: UPDATE_TOPICS,
      topics: [...topics, topic],
    })
  }

  const setTopics = (topics: topicType[]) => {
    dispatch({
      type: UPDATE_TOPICS,
      topics: topics,
    })
  }

  return { topics, addTopic, setTopics }
}
