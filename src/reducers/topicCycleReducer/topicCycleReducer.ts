import {
  ITopicCycleReducerType,
  topicCycleStoreAction,
  topicCycleType,
  UPDATE_TOPIC_CYCLE,
} from './topicCycleTypes'

const initialState: ITopicCycleReducerType = {
  topicsCycle: [] as topicCycleType[],
}

export const topicCycleReducer = (
  state: ITopicCycleReducerType = initialState,
  action: topicCycleStoreAction
): ITopicCycleReducerType => {
  switch (action.type) {
    case UPDATE_TOPIC_CYCLE:
      return {
        ...state,
        topicsCycle: action.topicsCycle,
      }
    default:
      return state
  }
}
