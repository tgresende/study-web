import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { projectPath } from '../../main/paths'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import { AppDispatch } from '../../store'

export default function SubjectPage() {
  const navigate = useNavigate()

  const { activeSubject } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const subjectName = activeSubject?.name || `sem nome`

  return (
    <Box display={`flex`} flexDirection={`column`} alignItems={'center'}>
      <h1> {subjectName}</h1>
      <Box
        display={`flex`}
        flexDirection={`row`}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={16}
        width={'80%'}
      >
        <Typography onClick={() => navigate(projectPath)}>{`àbc`}</Typography>
      </Box>
    </Box>
  )
}
