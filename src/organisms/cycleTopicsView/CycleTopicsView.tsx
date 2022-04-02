import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CommomButton } from '../../atoms/buttons'
import CycleItemCard from '../../molecules/cards/cycleItemCard/CycleItemCard'
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
    createOptimizedTopicCycle,
    openActionDialog,
    handleClickOpenActionDialog,
    handleCloseActionDialog,
    topicCycleChosen,
  } = UseCycleTopicsView(setTopicCycle, activeSubject?.subjectId)

  React.useEffect(() => {
    getTopicsCycle()
  }, [])

  return (
    <Card style={{ padding: 4 }}>
      <Box display={`flex`} flexDirection={`row`}>
        <CommomButton
          onClick={createSimpleTopicCycle}
          title="Criar ciclo simples"
        />
        <CommomButton
          onClick={createOptimizedTopicCycle}
          title="Criar ciclo otimizado"
        />
      </Box>

      <Card style={{ marginTop: 6 }}>
        <Typography>Ciclo - Tópicos</Typography>
        {topicsCycle &&
          topicsCycle.map(topicCycle => (
            <CycleItemCard
              itemCyclename={topicCycle.topicName}
              onFinalizeCycle={() => handleClickOpenActionDialog(topicCycle)}
              studyTimeMinutes={15}
              score={topicCycle.score}
            />
          ))}
        <ActionDialog
          open={openActionDialog}
          onClose={handleCloseActionDialog}
          topicCycle={topicCycleChosen}
        />
      </Card>
    </Card>
  )
}
