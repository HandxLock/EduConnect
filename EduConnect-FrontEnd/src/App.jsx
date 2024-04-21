import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import Login from './views/login.jsx'
import PerfilSuperAdminFormulario from './views/PerfilSuperAdminFormulario.jsx'
import PerfilSuperAdminHome from './views/PerfilSuperAdminHome.jsx'
import PerfilSuperAdminFormularioAdmin from './views/PerfilSuperAdminFormularioAdmin.jsx'
import PerfilAdminFormularioProfesor from './views/PerfilAdminFormularioProfesor.jsx'
import PerfilAdminHome from './views/PerfilAdminHome.jsx'
import PerfilAdminFormularioEstudiante from './views/PerfilAdminFormularioEstudiante.jsx'
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/superAdmin' element={<PerfilSuperAdminHome/>}/>
        <Route path='/superAdmin/formularioColegio' element={<PerfilSuperAdminFormulario/>}/>
        <Route path='/superAdmin/formularioAdmin' element={<PerfilSuperAdminFormularioAdmin/>}/>
        <Route path='/Admin' element={<PerfilAdminHome/>}/>
        <Route path='/Admin/formularioProfesor' element={<PerfilAdminFormularioProfesor/>}/>
        <Route path='/Admin/formularioEstudiante' element={<PerfilAdminFormularioEstudiante/>}/>
      </Routes>
    </>
  )
}

export default App
