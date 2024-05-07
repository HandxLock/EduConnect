import SidebarAdmin from '../../components/privado/SidebarAdmin'
import MainAdmin from '../../components/privado/MainAdmin'
import { useState } from 'react'
import FormularioAsignatura from '../../components/privado/FormularioAsignatura'
import FormularioCurso from '../../components/privado/FormularioCurso'
import FormularioAlumnoApoderado from '../../components/privado/FormularioAlumnoApoderado'
import FormularioProfesor from '../../components/privado/FormularioProfesor'
function Admin () {
  const [contenido, setContenido] = useState('')
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
        setContenido('colocar componente 4')
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
