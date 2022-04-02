import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { pathTypes } from '../../main/paths'

import MyImage from './assets/ciclo-1.jpg'

export default function CycleCard() {
  const navigateTo = useNavigate()

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={() => navigateTo(pathTypes.cyclePath)}>
        <CardMedia component="img" height="120" image={MyImage} alt="ciclos" />
        <Box display={`flex`} alignItems={`center`} justifyContent={`center`}>
          <Typography variant="h5">Ciclos</Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
