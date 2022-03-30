import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { pathTypes } from '../../main/paths'

export default function CycleCard() {
  const navigateTo = useNavigate()

  return (
    <Typography onClick={() => navigateTo(pathTypes.cyclePath)}>
      outro nome abc
    </Typography>
  )
}
