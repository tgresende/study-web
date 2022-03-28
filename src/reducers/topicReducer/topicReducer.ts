import {
  ITopicReducerType,
  TopicStoreAction,
  topicType,
  UPDATE_TOPICS,
} from './topicTypes'

const initialState: ITopicReducerType = {
  topics: [] as topicType[],
}

export const topicReducer = (
  state: ITopicReducerType = initialState,
  action: TopicStoreAction
): ITopicReducerType => {
  switch (action.type) {
    case UPDATE_TOPICS:
      return {
        ...state,
        topics: action.topics,
      }
    default:
      return state
  }
}
