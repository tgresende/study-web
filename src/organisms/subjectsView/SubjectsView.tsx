import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSubjectsUseCase } from '../../functions/api/getSubjectsUseCase'
import { pathTypes } from '../../main/paths'
import { AddIconBtn } from '../../molecules/buttons'
import { subjectType } from '../../reducers/subjectReducer/subjectTypes'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import { AppDispatch } from '../../store'

interface SubjectsViewPropTypes {
  openInsertSubjectDialog: () => void
}

export default function SubjectsView(props: SubjectsViewPropTypes) {
  const projectId = 1

  const { openInsertSubjectDialog } = props
  const { subjects, setSubjects, setActiveSubject } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  async function getSubject(): Promise<void> {
    const subjects = await getSubjectsUseCase(projectId)
    setSubjects(subjects)
  }

  const navigateTo = useNavigate()

  React.useEffect(() => {
    getSubject()
  }, [])

  function navigateToSubjectPage(subject: subjectType) {
    setActiveSubject(subject)
    navigateTo(pathTypes.subjectPath)
  }

  return (
    <Card style={{ width: `100%` }}>
      <Box
        display={`flex`}
        flexDirection={`row`}
        justifyContent={`flex-end`}
        alignItems={`center`}
      >
        <Box marginX={4}>
          <Typography variant="h6">Assuntos</Typography>
        </Box>
        <AddIconBtn onClick={openInsertSubjectDialog} />
      </Box>
      <Box
        display={`flex`}
        flexDirection={`column`}
        justifyContent={`center`}
        alignItems={`flex-start`}
        paddingX={2}
      >
        {subjects.map(subject => (
          <Typography onClick={() => navigateToSubjectPage(subject)}>
            {subject.name}
          </Typography>
        ))}
      </Box>
    </Card>
  )
}
