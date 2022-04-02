import { Box } from '@mui/system'

interface SimpleHeaderPropTypes {
  title: string
}

export default function SimpleHeader(props: SimpleHeaderPropTypes) {
  const { title } = props

  return (
    <Box
      display={`flex`}
      flexDirection={`row`}
      alignItems={`center`}
      justifyContent={`center`}
      width={`100%`}
    >
      <h1>{title}</h1>
    </Box>
  )
}
