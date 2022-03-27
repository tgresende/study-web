import React from 'react'
import { subjectType } from '../../reducers/subjectReducer/subjectTypes'
import { topicType } from '../../reducers/topicReducer/topicTypes'

export default function useTopicInsert(
  addTopicReducer: (topic: topicType) => void,
  subjectParent: subjectType
) {
  const [topicName, setTopicName] = React.useState<string>('')
  const [topicAnnotations, setTopicAnnotations] = React.useState<string>('')

  async function addTopic() {
    const body = {
      annotations: topicAnnotations,
      name: topicName,
      subjectId: subjectParent.subjectId,
    }

    addtopicsUseCase(body)
      .then(response => addTopicReducer(response))
      .catch(e => alert(e.message))
  }

  return {
    topicName,
    setTopicName,
    topicAnnotations,
    setTopicAnnotations,
    addTopic,
  }
}
