import Sidebar from '../../components/privado/Sidebar'
import MainSuperAdmin from '../../components/privado/MainSuperAdmin'
import { useState } from 'react'
import FormularioAdmin from '../../components/privado/FormularioAdmin'
import FormularioColegio from '../../components/privado/FormularioColegio'
import AsignacionColegio from '../../components/privado/AsignacionColegio'
import HomeSuperAdmin from '../../components/privado/HomeSuperAdmin'
import DashboardSuperAdmin from '../../components/privado/DashboardSuperAdmin'
function SuperAdmin () {
  const [contenido, setContenido] = useState(<HomeSuperAdmin />)
  const handleSidebarClick = (boton) => {
    switch (boton) {
      case 'Botón 0':
        setContenido(<HomeSuperAdmin />)
        break
      case 'Botón 1':
        setContenido(<FormularioAdmin />)
        break
      case 'Botón 2':
        setContenido(<FormularioColegio />)
        break
      case 'Botón 3':
        setContenido(<AsignacionColegio />)
        break
      case 'Botón 4':
        setContenido(<DashboardSuperAdmin />)
        break
      default:
        setContenido(null)
    }
  }

  return (
    <>
    <div className='d-flex'>
      <Sidebar onSidebarClick={handleSidebarClick} />
      <MainSuperAdmin contenido={contenido} />
    </div>
    </>
  )
}

export default SuperAdmin
