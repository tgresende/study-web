import { Routes, Route, Navigate } from 'react-router-dom'
import { ProjectPage, SubjectPage } from '../pages'
import { projectPath, subjectPath } from './paths'

const Main = () => {
  return (
    <Routes>
      <Route path={projectPath} element={<ProjectPage />} />
      <Route path={subjectPath} element={<SubjectPage />} />
      <Route path="" element={<Navigate to="/project" />} />
    </Routes>
  )
}
export default Main
