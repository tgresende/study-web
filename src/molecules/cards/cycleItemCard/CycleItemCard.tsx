import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { IconBtn } from '../../../atoms/buttons'
import CheckCircleIcon from '../../../atoms/icons/CheckCircleIcon'
import QueryBuilderIcon from '../../../atoms/icons/QueryBuilderIcon'

interface CycleItemCardPropTypes {
  itemCyclename: string
  studyTimeMinutes: number
  onFinalizeCycle: () => void
}

export default function CycleItemCard(props: CycleItemCardPropTypes) {
  const { itemCyclename, studyTimeMinutes, onFinalizeCycle } = props

  const getTimeStudyText = (studyTimeMinutes: number): string =>
    `${studyTimeMinutes} min`

  return (
    <Card style={{ margin: `2px` }}>
      <Box
        padding={1}
        display={`flex`}
        flexDirection={`row`}
        justifyContent={`space-between`}
        alignItems={`center`}
      >
        <Box width={'60%'} alignItems={`center`}>
          <Typography>{itemCyclename}</Typography>
        </Box>
        <Box
          width={'20%'}
          alignItems={`center`}
          display={`flex`}
          flexDirection={`row`}
        >
          <QueryBuilderIcon />
          <Typography style={{ marginLeft: 3 }}>
            {getTimeStudyText(studyTimeMinutes)}
          </Typography>
        </Box>
        <Box width={'10%'} alignItems={`center`}>
          <IconBtn onClick={onFinalizeCycle}>
            <CheckCircleIcon />
          </IconBtn>
        </Box>
      </Box>
    </Card>
  )
}
