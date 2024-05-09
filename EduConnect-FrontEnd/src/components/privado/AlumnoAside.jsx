import Button from 'react-bootstrap/Button'
import '../../styles/privado/aside.css'
import { useAuth } from '../../context/AuthContext'
const AsideAlumno = () => {
  const { user, logoutContext } = useAuth()
  return (
    <>
    <aside className='aside'>
      <div className='contenedor'>
        <div className='perfil'>
          <h4>Bienvenido {user.nombre}</h4>
        </div>
        <div className='botones'>
          <Button variant="secondary" size="lg">
            Alumno
          </Button>

        </div>
      </div>
      <div className='cerrarSesion'>
        <Button variant="danger" size="lg" onClick={() => logoutContext()}>
            Cerrar Sesion
        </Button>

      </div>
    </aside>
    </>
  )
}

export default AsideAlumno
