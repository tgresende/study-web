import { Dialog, DialogTitle, Typography } from '@mui/material'
import { topicCycleType } from '../../../reducers/topicCycleReducer/topicCycleTypes'

interface DialogPropTypes {
  open: boolean
  onClose: () => void
  topicCycle: topicCycleType | undefined
}

export default function ActionDialog(
  props: DialogPropTypes
): React.ReactElement<DialogPropTypes> {
  const { onClose, open, topicCycle } = props
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Tópico {topicCycle?.topicName}</DialogTitle>
      <Typography>Ação: colocar aqui a action que vai vir do tópico</Typography>
    </Dialog>
  )
}
