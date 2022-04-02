import React from 'react'

export function useSubjectPage() {
  const [insertTopicDialogOpen, setInsertTopicDialogOpen] =
    React.useState<boolean>(false)

  function closeInsertTopicDialog() {
    setInsertTopicDialogOpen(false)
  }

  function openInsertTopicDialog() {
    setInsertTopicDialogOpen(true)
  }

  return {
    insertTopicDialogOpen,
    openInsertTopicDialog,
    closeInsertTopicDialog,
  }
}
