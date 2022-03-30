import { Typography } from '@mui/material'
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

export default function SubjectsView() {
  const projectId = 1
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
    <Box>
      <AddIconBtn onClick={() => alert('abri modal com adicao de subject')} />
      {subjects.map(subject => (
        <Typography onClick={() => navigateToSubjectPage(subject)}>
          {subject.name}
        </Typography>
      ))}
    </Box>
  )
}
