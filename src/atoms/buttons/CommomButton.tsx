import { Button, ButtonProps, Typography } from '@mui/material'
import { ReactChild } from 'react'

export default function CommomButton(props: ButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      variant="contained"
    >
      <Typography>{props.title}</Typography>
    </Button>
  )
}
