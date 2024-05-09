import SidebarAdmin from '../../components/privado/SidebarAdmin'
import MainAdmin from '../../components/privado/MainAdmin'
import { useState } from 'react'
import FormularioAsignatura from '../../components/privado/FormularioAsignatura'
import FormularioCurso from '../../components/privado/FormularioCurso'
import FormularioAlumnoApoderado from '../../components/privado/FormularioAlumnoApoderado'
import FormularioProfesor from '../../components/privado/FormularioProfesor'
import DocenteCurso from '../../components/privado/DocenteCurso'
import HomeAdmin from '../../components/privado/HomeAdmin'
import DashboardAdmin from '../../components/privado/DashboardAdmin'
function Admin () {
  const [contenido, setContenido] = useState(<HomeAdmin />)
  const handleSidebarClick = (boton) => {
    switch (boton) {
      case 'Botón 0':
        setContenido(<FormularioProfesor />)
        break
      case 'Botón 1':
        setContenido(<FormularioAlumnoApoderado/>)
        break
      case 'Botón 2':
        setContenido(<FormularioAsignatura/>)
        break
      case 'Botón 3':
        setContenido(<FormularioCurso/>)
        break
      case 'Botón 4':
        setContenido(<DashboardAdmin/>)
        break
      case 'Botón 5':
        setContenido(<DocenteCurso/>)
        break
      case 'Botón 6':
        setContenido(<HomeAdmin />)
        break
      default:
        setContenido(null)
    }
  }

  return (
    <>
    <div className='d-flex'>
      <SidebarAdmin onSidebarClick={handleSidebarClick} />
      <MainAdmin contenido={contenido} />
    </div>
    </>
  )
}

export default Admin
