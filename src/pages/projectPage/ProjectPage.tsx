import { Box } from '@mui/material'
import { SubjectInsertDialog, SubjectsView, CycleCard } from '../../organisms'
import { useProjectPage } from './useProjectPage'

export default function ProjectPage() {
  const {
    insertSubjectDialogOpen,
    openInsertSubjectDialog,
    closeInsertSubjectDialog,
  } = useProjectPage()

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
        <SubjectsView openInsertSubjectDialog={openInsertSubjectDialog} />
        <SubjectInsertDialog
          open={insertSubjectDialogOpen}
          onClose={closeInsertSubjectDialog}
        />
        <CycleCard />
      </Box>
    </Box>
  )
}
