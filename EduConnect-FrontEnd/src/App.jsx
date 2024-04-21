import { Routes, Route } from 'react-router-dom'
import PerfilSuperAdminFormulario from './views/PerfilSuperAdminFormulario.jsx'
import PerfilSuperAdminHome from './views/PerfilSuperAdminHome.jsx'
import PerfilSuperAdminFormularioAdmin from './views/PerfilSuperAdminFormularioAdmin.jsx'
import PerfilAdminFormularioProfesor from './views/PerfilAdminFormularioProfesor.jsx'
import PerfilAdminHome from './views/PerfilAdminHome.jsx'
import PerfilAdminFormularioEstudiante from './views/PerfilAdminFormularioEstudiante.jsx'
import NavBar from './components/publico/NavBar.jsx'
import HomePage from './views/publico/HomePage.jsx'
import Login from './views/publico/login.jsx'

function App () {
  return (
    <>
      <NavBar />
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
