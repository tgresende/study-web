import { TextField, TextFieldProps } from '@mui/material'

export default function NumberInput(props: TextFieldProps) {
  return (
    <TextField
      onChange={props.onChange}
      variant="standard"
      value={props.value}
      label={props.label}
      id={props.id}
      disabled={props.disabled}
      type="number"
      fullWidth
    />
  )
}
