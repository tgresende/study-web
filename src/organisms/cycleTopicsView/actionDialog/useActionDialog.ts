import React from 'react'
import {
  addQuestionUseCase,
  addQuestionUseCaseBodyType,
} from '../../../functions/api/question/addQuestionUseCase/AddQuestionUseCase'
import { getTopicAnnotationItemsUseCase } from '../../../functions/api/topics/getTopicAnnotationItemsUseCase'
import { topicCycleType } from '../../../reducers/topicCycleReducer/topicCycleTypes'

export function useActionDialog(
  topicCycle: topicCycleType,
  onClose: () => void
) {
  const [correctQuestion, setCorrectQuestion] = React.useState<number>(0)
  const [doneQuestion, setDoneQuestion] = React.useState<number>(0)
  const [revisionItem, setRevisionItem] = React.useState<string>('')
  const [revisionCycle, setRevisionCycle] = React.useState<string>('')
  const [readingItem, setReadingItem] = React.useState<string>('')
  const [readingCycle, setReadingCycle] = React.useState<string>('')
  const [lawsItem, setLawsItem] = React.useState<string>('')
  const [lawsCycle, setLawsCycle] = React.useState<string>('')

  async function addQuestion() {
    if (!isValidQuestion()) return

    const questionBody: addQuestionUseCaseBodyType = {
      correctQuestions: correctQuestion,
      doneQuestions: doneQuestion,
      topicId: topicCycle.topicId,
      lawsCycle,
      lawsItem,
      readingCycle,
      readingItem,
      revisionCycle,
      revisionItem,
    }

    await addQuestionUseCase(questionBody)

    await handleClose()
  }

  function isValidQuestion(): boolean {
    if (correctQuestion > doneQuestion) {
      alert('Quantidade questoes feitas e resolvidas incoerentes')
      return false
    }
    return true
  }

  function handleClose() {
    onClose()
  }

  async function getTopicAnnotationItems(): Promise<void> {
    if (!topicCycle.topicId) {
      alert('Id do topico nao encontrado')
      return
    }

    const topicAnotations = await getTopicAnnotationItemsUseCase(
      topicCycle.topicId
    )

    setRevisionItem(topicAnotations.revisionItem)
    setRevisionCycle(topicAnotations.revisionCycle)
    setLawsCycle(topicAnotations.lawsCycle)
    setLawsItem(topicAnotations.lawsItem)
    setReadingCycle(topicAnotations.readingCycle)
    setReadingItem(topicAnotations.readingItem)
  }

  return {
    correctQuestion,
    setCorrectQuestion,
    doneQuestion,
    setDoneQuestion,
    addQuestion,
    handleClose,
    getTopicAnnotationItems,
    revisionItem,
    revisionCycle,
    readingItem,
    readingCycle,
    lawsItem,
    lawsCycle,
    setLawsCycle,
    setLawsItem,
    setReadingItem,
    setReadingCycle,
    setRevisionCycle,
    setRevisionItem,
  }
}
