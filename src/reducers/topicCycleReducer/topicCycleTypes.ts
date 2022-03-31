export const UPDATE_TOPIC_CYCLE = `UPDATE_TOPIC_CYCLE`

export type topicCycleStoreAction = {
  type: string
  topicsCycle: topicCycleType[]
}

export type scoreType = 0 | 1 | 2

export type topicCycleType = {
  topicCycleId: number
  topicName: string
  score: scoreType
}

export interface ITopicCycleReducerType {
  topicsCycle: topicCycleType[]
}
