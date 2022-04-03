import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { IconBtn } from '../../../atoms/buttons'
import CheckCircleIcon from '../../../atoms/icons/CheckCircleIcon'
import GradeIcon from '../../../atoms/icons/GradeIcon'
import QueryBuilderIcon from '../../../atoms/icons/QueryBuilderIcon'
import { translateScoreEnumToScoreDomain } from '../../../functions/enumInterpreters/scoreInterpreter'

interface CycleItemCardPropTypes {
  itemCyclename: string
  studyTimeMinutes: number
  onFinalizeCycle: () => void
  score: number
  action: string
}

export default function CycleItemCard(props: CycleItemCardPropTypes) {
  const { itemCyclename, studyTimeMinutes, onFinalizeCycle, score, action } =
    props

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
        <Box width={'40%'} alignItems={`center`}>
          <Typography>{itemCyclename}</Typography>
          <Typography>{action}</Typography>
        </Box>
        <Box
          width={'20%'}
          alignItems={`center`}
          display={`flex`}
          flexDirection={`row`}
        >
          <GradeIcon />
          <Typography style={{ marginLeft: 3 }}>
            {translateScoreEnumToScoreDomain(score)}
          </Typography>
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
