import SidebarDocente from '../../components/privado/SidebarDocente.jsx'
import MainSuperAdmin from '../../components/privado/MainSuperAdmin'
import { useState } from 'react'
import FormularioAdmin from '../../components/privado/FormularioAdmin'
import FormularioColegio from '../../components/privado/FormularioColegio'
import AsignacionColegio from '../../components/privado/AsignacionColegio'
import HomeDocente from '../../components/privado/HomeDocente.jsx'
import DashboardSuperAdmin from '../../components/privado/DashboardSuperAdmin'
function Docente () {
  const [contenido, setContenido] = useState(<HomeDocente />)
  const handleSidebarClick = (boton) => {
    switch (boton) {
      case 'Botón 0':
        setContenido(<HomeDocente />)
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
      <SidebarDocente onSidebarClick={handleSidebarClick} />
      <MainSuperAdmin contenido={contenido} />
    </div>
    </>
  )
}

export default Docente
