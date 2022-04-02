import React from 'react'

export function useProjectPage() {
  const [insertSubjectDialogOpen, setInsertSubjectDialogOpen] =
    React.useState<boolean>(false)

  function closeInsertSubjectDialog() {
    setInsertSubjectDialogOpen(false)
  }

  function openInsertSubjectDialog() {
    setInsertSubjectDialogOpen(true)
  }

  return {
    insertSubjectDialogOpen,
    openInsertSubjectDialog,
    closeInsertSubjectDialog,
  }
}
