import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ipcRenderer } from 'electron'
import React from 'react'
import {
  getSubjectsUseCase,
  getSubjectsUseCaseResponse,
} from '../../functions/api/getSubjectsUseCase'
import { AddIconBtn } from '../../molecules/buttons'

export default function SubjectsView() {
  const projectId = 1

  async function getSubject(): Promise<void> {
    const data = await getSubjectsUseCase(projectId)
    alert(JSON.stringify(data))
  }

  React.useEffect(() => {
    getSubject()
  }, [])

  return (
    <Box>
      <AddIconBtn onClick={() => alert(`123`)} />

      <Typography>aqui vai os cards</Typography>
    </Box>
  )
}
