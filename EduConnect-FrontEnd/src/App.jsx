import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import Login from './views/login.jsx'
import PerfilSuperAdminFormulario from './views/PerfilSuperAdminFormulario.jsx'
import PerfilSuperAdminHome from './views/PerfilSuperAdminHome.jsx'
import PerfilSuperAdminFormularioAdmin from './views/PerfilSuperAdminFormularioAdmin.jsx'
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/superAdmin' element={<PerfilSuperAdminHome/>}/>
        <Route path='/superAdmin/formularioColegio' element={<PerfilSuperAdminFormulario/>}/>
        <Route path='/superAdmin/formularioAdmin' element={<PerfilSuperAdminFormularioAdmin/>}/>
      </Routes>
    </>
  )
}

export default App
