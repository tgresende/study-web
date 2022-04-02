import { Dialog, DialogTitle, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CommomButton } from '../../atoms/buttons'
import { TextInput, NumberInput } from '../../atoms/inputs'
import { subjectType } from '../../reducers/subjectReducer/subjectTypes'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import useTopicReducer from '../../reducers/topicReducer/useTopicReducer'
import { AppDispatch } from '../../store'
import useTopicInsert from './useTopicInsertDialog'

interface TopicInsertDialogPropTypes {
  open: boolean
  onClose: () => void
}

export default function TopicInsertDialog(props: TopicInsertDialogPropTypes) {
  const { open, onClose } = props
  const { addTopic: addTopicReducer } = useTopicReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const { activeSubject } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const {
    topicName,
    setTopicName,
    topicAnnotations,
    setTopicAnnotations,
    addTopic,
  } = useTopicInsert(addTopicReducer, activeSubject as subjectType)

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth={`xs`}>
      <DialogTitle>Inserir Tópico</DialogTitle>
      <TextInput
        id="topicName"
        label="Tópico"
        value={topicName}
        onChange={e => setTopicName(e.target.value)}
      />
      <TextInput
        id="topicAnnotations"
        label="Anotações"
        variant="standard"
        value={topicAnnotations}
        onChange={e => setTopicAnnotations(e.target.value)}
      />
      <CommomButton title="salvar" onClick={addTopic} />
    </Dialog>
  )
}
