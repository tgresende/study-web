import { Dialog, DialogTitle, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CommomButton } from '../../atoms/buttons'
import { TextInput, NumberInput } from '../../atoms/inputs'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import { AppDispatch } from '../../store'
import useSubjectInsertDialog from './useSubjectInsertDialog'

interface SubjectInsertDialogPropTypes {
  open: boolean
  onClose: () => void
}

export default function SubjectInsertDialog(
  props: SubjectInsertDialogPropTypes
) {
  const { onClose, open } = props

  const { addSubject: addSubjectReducer } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const {
    subjectName,
    setSubjectName,
    subjectWeight,
    setSubjectWeight,
    subjectAnnotations,
    setSubjectAnnotations,
    addSubject,
  } = useSubjectInsertDialog()

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Inserir assunto</DialogTitle>
      <TextInput
        id="subjectName"
        label="Assunto"
        value={subjectName}
        onChange={e => setSubjectName(e.target.value)}
      />
      <NumberInput
        id="subjectWeight"
        label="Peso"
        value={subjectWeight}
        onChange={e => setSubjectWeight(parseInt(e.target.value))}
      />
      <TextInput
        id="subjectAnnotations"
        label="Anotações"
        variant="standard"
        value={subjectAnnotations}
        onChange={e => setSubjectAnnotations(e.target.value)}
      />
      <CommomButton
        title="salvar"
        onClick={() => addSubject(addSubjectReducer, onClose)}
      />
    </Dialog>
  )
}
