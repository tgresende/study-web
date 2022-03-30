import { Box } from '@mui/material'
import { SubjectInsert, SubjectsView, CycleCard } from '../../organisms'

export default function ProjectPage() {
  return (
    <Box display={`flex`} flexDirection={`column`} alignItems={'center'}>
      <h1> view de projetos</h1>
      <Box
        display={`flex`}
        flexDirection={`row`}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={16}
        width={'80%'}
      >
        <SubjectsView />
        <SubjectInsert />
        <CycleCard />
      </Box>
    </Box>
  )
}
