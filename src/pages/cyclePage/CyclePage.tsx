import { Box, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { pathTypes } from '../../main/paths'
import useSubjectCycleReducer from '../../reducers/subjectCycleReducer/useSubjectCycleReducer'
import { AppDispatch } from '../../store'
import useCyclePage from './useCyclePage'

export default function CyclePage() {
  const navigate = useNavigate()

  const { setSubjectCycles, subjectsCycle } = useSubjectCycleReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const { generateNewSimpleCycle, getCycle } = useCyclePage()

  const generateSimpleCycle = () => {
    generateNewSimpleCycle(setSubjectCycles, 1)
  }

  React.useEffect(() => {
    getCycle(setSubjectCycles, 1)
  }, [])

  return (
    <Box display={`flex`} flexDirection={`column`} alignItems={'center'}>
      <h1> Ciclos</h1>
      <Box
        display={`flex`}
        flexDirection={`row`}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={16}
        width={'80%'}
      >
        <Typography
          onClick={() => navigate(pathTypes.projectPath)}
        >{`Voltar`}</Typography>
        <Box>
          {subjectsCycle &&
            subjectsCycle.map(cycleItem => (
              <Typography>
                {cycleItem.subjectName}-{cycleItem.studyTimeMinutes}
              </Typography>
            ))}
        </Box>
        <Typography
          onClick={generateSimpleCycle}
        >{`Gerar Ciclo Simples`}</Typography>
      </Box>
    </Box>
  )
}
