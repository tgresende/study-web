import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import useTopicReducer from '../../reducers/topicReducer/useTopicReducer'
import { AppDispatch } from '../../store'
import UseTopicsView from './UseTopicsView'

export default function TopicsView() {
  const { topics, setTopics } = useTopicReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const { activeSubject } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const { getSubjectTopics } = UseTopicsView()

  React.useEffect(() => {
    getSubjectTopics(setTopics, activeSubject?.subjectId)
  }, [])

  return (
    <Box>
      <Typography>Tópicos</Typography>
      {topics.map(topic => (
        <Typography>{topic.name}</Typography>
      ))}
    </Box>
  )
}
