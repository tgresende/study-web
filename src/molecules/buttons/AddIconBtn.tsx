import { IconBtn } from '../../atoms/buttons'
import AddIcon from '../../atoms/icons/AddIcon'

type AddIconBtnType = {
  onClick: () => void
}

export default function AddIconBtn(props: AddIconBtnType) {
  return (
    <IconBtn onClick={props.onClick}>
      <AddIcon />
    </IconBtn>
  )
}
