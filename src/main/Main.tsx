import { Routes, Route, Navigate } from 'react-router-dom'
import { ProjectPage, SubjectPage, CyclePage } from '../pages'
import { pathTypes } from '../main/paths'
const Main = () => {
  return (
    <Routes>
      <Route path={pathTypes.projectPath} element={<ProjectPage />} />
      <Route path={pathTypes.subjectPath} element={<SubjectPage />} />
      <Route path={pathTypes.cyclePath} element={<CyclePage />} />
      <Route path="" element={<Navigate to={pathTypes.projectPath} />} />
    </Routes>
  )
}
export default Main
