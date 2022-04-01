import { Dialog, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import { CommomButton } from '../../../atoms/buttons'
import { TextInput } from '../../../atoms/inputs'
import { topicCycleType } from '../../../reducers/topicCycleReducer/topicCycleTypes'
import { useActionDialog } from './useActionDialog'

interface DialogPropTypes {
  open: boolean
  onClose: () => void
  topicCycle: topicCycleType | undefined
}

export default function ActionDialog(
  props: DialogPropTypes
): React.ReactElement<DialogPropTypes> {
  const { onClose, open, topicCycle } = props

  const {
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
  } = useActionDialog(topicCycle!, onClose)

  React.useEffect(() => {
    if (open) getTopicAnnotationItems()
  }, [open])

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Tópico {topicCycle?.topicName}</DialogTitle>
      <Typography>Ação: colocar aqui a action que vai vir do tópico</Typography>
      <TextInput
        id="correctQuestion"
        label="Quant. Questoes Corretas"
        variant="standard"
        type="number"
        value={correctQuestion}
        onChange={e => setCorrectQuestion(parseInt(e.target.value))}
      />
      <TextInput
        id="doneQuestion"
        label="Quant. Questoes Feitas"
        variant="standard"
        type="number"
        value={doneQuestion}
        onChange={e => setDoneQuestion(parseInt(e.target.value))}
      />
      <TextInput
        id="revisionItem"
        label="Items de Revisao"
        variant="standard"
        value={revisionItem}
        onChange={e => setRevisionItem(e.target.value)}
      />
      <TextInput
        id="revisionCycle"
        label="Ciclo atual de Revisao"
        variant="standard"
        value={revisionCycle}
        onChange={e => setRevisionCycle(e.target.value)}
      />

      <TextInput
        id="readingItem"
        label="Items de Leitura"
        variant="standard"
        value={readingItem}
        onChange={e => setReadingItem(e.target.value)}
      />
      <TextInput
        id="readingCycle"
        label="Ciclo Atual de Leitura"
        variant="standard"
        value={readingCycle}
        onChange={e => setReadingCycle(e.target.value)}
      />
      <TextInput
        id="lawsItem"
        label="Items de Lei"
        variant="standard"
        value={lawsItem}
        onChange={e => setLawsItem(e.target.value)}
      />
      <TextInput
        id="lawsCycle"
        label="Ciclo Atual de leis"
        variant="standard"
        value={lawsCycle}
        onChange={e => setLawsCycle(e.target.value)}
      />

      <CommomButton title="Finalizar Tarefa" onClick={addQuestion} />
    </Dialog>
  )
}
