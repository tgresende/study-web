import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { pathTypes } from '../../main/paths'
import { HeaderBackButton } from '../../molecules/headers'
import { CycleTopicsView } from '../../organisms'
import TopicInsertDialog from '../../organisms/topicInsertDialog/TopictInsertDialog'
import TopicsView from '../../organisms/topicsView/TopicsView'
import useSubjectReducer from '../../reducers/subjectReducer/useSubjectReducer'
import { AppDispatch } from '../../store'
import { useSubjectPage } from './useSubjectPage'

export default function SubjectPage() {
  const navigate = useNavigate()

  const { activeSubject } = useSubjectReducer(
    useDispatch() as AppDispatch,
    useSelector
  )

  const {
    insertTopicDialogOpen,
    closeInsertTopicDialog,
    openInsertTopicDialog,
  } = useSubjectPage()

  const goBack = () => navigate(pathTypes.projectPath)

  const subjectName = activeSubject?.name || `sem nome`

  return (
    <Box display={`flex`} flexDirection={`column`} alignItems={'center'}>
      <HeaderBackButton title={subjectName} onClickAction={goBack} />
      <Box
        display={`flex`}
        flexDirection={`row`}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={8}
        width={'80%'}
      >
        <Box width={1 / 4}>
          <TopicsView openInsertTopicDialog={openInsertTopicDialog} />
        </Box>
        <Box width={1 / 2}>
          <CycleTopicsView />
        </Box>
        <TopicInsertDialog
          open={insertTopicDialogOpen}
          onClose={closeInsertTopicDialog}
        />
      </Box>
    </Box>
  )
}
