import { Box } from '@mui/material'
import { SimpleHeader } from '../../molecules/headers'
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
      <SimpleHeader title={`Projetos`} />
      <Box
        display={`flex`}
        flexDirection={`row`}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={16}
        width={'80%'}
      >
        <Box width={1 / 4}>
          <SubjectsView openInsertSubjectDialog={openInsertSubjectDialog} />
        </Box>
        <SubjectInsertDialog
          open={insertSubjectDialogOpen}
          onClose={closeInsertSubjectDialog}
        />
        <CycleCard />
      </Box>
    </Box>
  )
}
