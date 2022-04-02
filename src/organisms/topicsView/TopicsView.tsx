import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddIconBtn } from '../../molecules/buttons'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import { topicType } from '../../reducers/topicReducer/topicTypes'
import useTopicReducer from '../../reducers/topicReducer/useTopicReducer'
import { AppDispatch } from '../../store'
import UseTopicsView from './UseTopicsView'

interface TopicsViewType {
  openInsertTopicDialog: () => void
}

export default function TopicsView(props: TopicsViewType) {
  const { openInsertTopicDialog } = props
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
    <Card>
      <Box>
        <Box
          display={`flex`}
          flexDirection={`row`}
          justifyContent={`flex-end`}
          alignItems={`center`}
        >
          <Box marginX={4}>
            <Typography variant="h6">Tópicos</Typography>
          </Box>
          <AddIconBtn onClick={openInsertTopicDialog} />
        </Box>
        {topics.map(topic => (
          <Card style={{ margin: 4 }}>
            <Typography>{topic.name}</Typography>
          </Card>
        ))}
      </Box>
    </Card>
  )
}
