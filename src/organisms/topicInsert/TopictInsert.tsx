import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CommomButton } from '../../atoms/buttons'
import { TextInput, NumberInput } from '../../atoms/inputs'
import { subjectType } from '../../reducers/subjectReducer/subjectTypes'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import useTopicReducer from '../../reducers/topicReducer/useTopicReducer'
import { AppDispatch } from '../../store'
import useTopicInsert from './useTopicInsert'

export default function TopicInsert() {
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
    <Box display={`flex`} flexDirection={`column`}>
      <Typography>Inserir tópico</Typography>
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
      <CommomButton title="salvar" onClick={() => addTopic()} />
    </Box>
  )
}
