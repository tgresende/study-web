import React from 'react'
import { addSimpleTopicCycleUseCase } from '../../functions/api/topicsCycle/addSimpleTopicCycleUseCase'
import { addOptimizedTopicCycleUseCase } from '../../functions/api/topicsCycle/addOptimizedTopicCycleUseCase'

import { getTopicsCycleUseCase } from '../../functions/api/topicsCycle/getTopicCycleUseCase'
import { topicCycleType } from '../../reducers/topicCycleReducer/topicCycleTypes'

export default function UseCycleTopicsView(
  setCycleTopicReducer: (topicsCycle: topicCycleType[]) => void,
  subjectId?: number
) {
  const [openActionDialog, setOpenActionDialog] = React.useState<boolean>(false)
  const [topicCycleChosen, setTopicCycleChosen] = React.useState<
    topicCycleType | undefined
  >(undefined)

  async function getTopicsCycle(): Promise<void> {
    if (!subjectId) {
      alert('assunto não informado no useCycleTopicView')
      return
    }

    const topicsCycle = await getTopicsCycleUseCase(subjectId)

    setCycleTopicReducer(topicsCycle)
  }

  async function createSimpleTopicCycle(): Promise<void> {
    if (!subjectId) {
      alert('assunto não informado no useCycleTopicView')
      return
    }
    await addSimpleTopicCycleUseCase(subjectId)
    const topicsCycle = await getTopicsCycleUseCase(subjectId)
    setCycleTopicReducer(topicsCycle)
  }

  async function createOptimizedTopicCycle(): Promise<void> {
    if (!subjectId) {
      alert('assunto não informado no useCycleTopicView')
      return
    }
    await addOptimizedTopicCycleUseCase(subjectId)
    const topicsCycle = await getTopicsCycleUseCase(subjectId)
    setCycleTopicReducer(topicsCycle)
  }

  const handleClickOpenActionDialog = (
    topicCycle: topicCycleType | undefined
  ) => {
    setTopicCycleChosen(topicCycle)
    setOpenActionDialog(true)
  }

  const handleCloseActionDialog = () => {
    setTopicCycleChosen(undefined)
    getTopicsCycle()
    setOpenActionDialog(false)
  }

  return {
    getTopicsCycle,
    createSimpleTopicCycle,
    openActionDialog,
    handleClickOpenActionDialog,
    handleCloseActionDialog,
    topicCycleChosen,
    createOptimizedTopicCycle,
  }
}
