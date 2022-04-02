import { TextField, TextFieldProps } from '@mui/material'

export default function TextInput(props: TextFieldProps) {
  return (
    <TextField
      onChange={props.onChange}
      variant="standard"
      value={props.value}
      label={props.label}
      id={props.id}
      disabled={props.disabled}
      fullWidth
    />
  )
}
