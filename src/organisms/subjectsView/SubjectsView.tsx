import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubjectsUseCase } from '../../functions/api/getSubjectsUseCase'
import { AddIconBtn } from '../../molecules/buttons'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import { AppDispatch } from '../../store'

export default function SubjectsView() {
  const projectId = 1
  const { subjects, addSubject, setSubjects } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  async function getSubject(): Promise<void> {
    const subjects = await getSubjectsUseCase(projectId)
    setSubjects(subjects)
  }

  React.useEffect(() => {
    getSubject()
  }, [])

  return (
    <Box>
      <AddIconBtn
        onClick={() =>
          addSubject({
            name: Math.random().toString(),
            annotations: 'bc',
            subjectId: 1,
            weight: 10,
          })
        }
      />
      {subjects.map(subject => (
        <Typography>{subject.name}</Typography>
      ))}
    </Box>
  )
}
