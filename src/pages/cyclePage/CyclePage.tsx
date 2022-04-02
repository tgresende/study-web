import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CommomButton, IconBtn } from '../../atoms/buttons'
import CheckCircleIcon from '../../atoms/icons/CheckCircleIcon'
import QueryBuilderIcon from '../../atoms/icons/QueryBuilderIcon'
import { pathTypes } from '../../main/paths'
import { HeaderBackButton } from '../../molecules/headers'
import useSubjectCycleReducer from '../../reducers/subjectCycleReducer/useSubjectCycleReducer'
import { AppDispatch } from '../../store'
import useCyclePage from './useCyclePage'

export default function CyclePage() {
  const projectId = 1
  const navigate = useNavigate()

  const { setSubjectCycles } = useSubjectCycleReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const {
    generateNewSimpleCycle,
    getCycle,
    getTimeStudyText,
    subjectsCycle,
    finalizeSubjectCycle,
  } = useCyclePage()

  const generateSimpleCycle = () => {
    generateNewSimpleCycle(projectId)
  }

  React.useEffect(() => {
    getCycle(projectId)
  }, [])

  function navigateBack() {
    navigate(pathTypes.projectPath)
  }

  return (
    <Box
      display={`flex`}
      flexDirection={`column`}
      alignItems={'center'}
      width={`100%`}
      height={600}
    >
      <HeaderBackButton onClickAction={navigateBack} title="Ciclos" />
      <CommomButton onClick={generateSimpleCycle} title="Gerar Ciclo Simples" />
      <Box
        display={`flex`}
        flexDirection={`column`}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={`50%`}
        marginTop={3}
      >
        {subjectsCycle &&
          subjectsCycle.map(cycleItem => (
            <Card style={{ margin: `2px`, width: `80%` }}>
              <Box
                padding={1}
                display={`flex`}
                flexDirection={`row`}
                justifyContent={`space-between`}
                alignItems={`center`}
              >
                <Box width={'60%'} alignItems={`center`}>
                  <Typography>{cycleItem.subjectName}</Typography>
                </Box>
                <Box
                  width={'20%'}
                  alignItems={`center`}
                  display={`flex`}
                  flexDirection={`row`}
                >
                  <QueryBuilderIcon />
                  <Typography style={{ marginLeft: 3 }}>
                    {getTimeStudyText(cycleItem.studyTimeMinutes)}
                  </Typography>
                </Box>
                <Box width={'10%'} alignItems={`center`}>
                  <IconBtn onClick={() => finalizeSubjectCycle(cycleItem)}>
                    <CheckCircleIcon />
                  </IconBtn>
                </Box>
              </Box>
            </Card>
          ))}
      </Box>
    </Box>
  )
}
