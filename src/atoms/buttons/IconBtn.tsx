import { IconButton } from '@mui/material'

type IconBtnType = {
  onClick: () => void
  children: React.ReactChild
}

export default function IconBtn(props: IconBtnType) {
  return (
    <IconButton color="primary" component="span" onClick={props.onClick}>
      {props.children}
    </IconButton>
  )
}
