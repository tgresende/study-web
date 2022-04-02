import { Box } from '@mui/system'
import { IconBtn } from '../../../atoms/buttons'
import LeftArrowIcon from '../../../atoms/icons/LeftArrowIcon'

interface HeaderBackButtonPropTypes {
  title: string
  onClickAction: () => void
}

export default function HeaderBackButton(props: HeaderBackButtonPropTypes) {
  const { title, onClickAction } = props

  return (
    <Box
      display={`flex`}
      flexDirection={`row`}
      alignItems={`center`}
      width={`100%`}
    >
      <Box width={1 / 6} display={`flex`} justifyContent={`flex-start`}>
        <IconBtn onClick={onClickAction}>
          <LeftArrowIcon />
        </IconBtn>
      </Box>
      <Box width={4 / 6} display={`flex`} justifyContent={`center`}>
        <h1>{title}</h1>
      </Box>
    </Box>
  )
}
