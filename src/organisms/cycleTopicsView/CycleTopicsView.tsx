import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import useTopicCycleReducer from '../../reducers/topicCycleReducer/useTopicCycleReducer'
import { AppDispatch } from '../../store'
import ActionDialog from './actionDialog/ActionDialog'
import UseCycleTopicsView from './UseCycleTopicsView'

export default function CycleTopicsView() {
  const { topicsCycle, setTopicCycle } = useTopicCycleReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const { activeSubject } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const {
    getTopicsCycle,
    createSimpleTopicCycle,
    openActionDialog,
    handleClickOpenActionDialog,
    handleCloseActionDialog,
    topicCycleChosen,
  } = UseCycleTopicsView(setTopicCycle, activeSubject?.subjectId)

  React.useEffect(() => {
    getTopicsCycle()
  }, [])

  return (
    <Box>
      <Typography onClick={createSimpleTopicCycle}>
        Criar ciclo simples
      </Typography>
      <Typography>Ciclo - Tópicos</Typography>
      {topicsCycle &&
        topicsCycle.map(topic => (
          <Typography onClick={() => handleClickOpenActionDialog(topic)}>
            {topic.topicName}
          </Typography>
        ))}
      <ActionDialog
        open={openActionDialog}
        onClose={handleCloseActionDialog}
        topicCycle={topicCycleChosen}
      />
    </Box>
  )
}
