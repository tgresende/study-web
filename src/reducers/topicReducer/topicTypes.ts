export const UPDATE_TOPICS = `UPDATE_TOPICS`

export type TopicStoreAction = {
  type: string
  topics: topicType[]
}

export type topicType = {
  TopicId: number
  name: string
  annotations: string
}

export interface ITopicReducerType {
  topics: topicType[]
}
