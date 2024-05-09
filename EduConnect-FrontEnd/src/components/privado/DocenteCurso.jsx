import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useAuth } from '../../context/AuthContext'
import { getDocenteIdPorColegioId, asignacionDocenteCurso } from '../../services/docenteService'
import { obtenerCursoPorColegioId } from '../../services/cursoService'
function DocenteCurso () {
  const [selectDocente, setSelectDocente] = useState('')
  const [selectCurso, setSelectCurso] = useState('')
  const [docentes, setDocente] = useState([])
  const [cursos, setCursos] = useState([])
  const [mensaje, setMensaje] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    // Función asincrónica para obtener los colegios y administradores al cargar el componente
    const fetchData = async () => {
      try {
        const docenteData = await getDocenteIdPorColegioId(user.colegio_id)
        const cursoData = await obtenerCursoPorColegioId(user.colegio_id)
        setDocente(docenteData)
        setCursos(cursoData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [user.colegio_id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(selectDocente)
      console.log(selectCurso)
      await asignacionDocenteCurso(selectDocente, selectCurso)
      setMensaje('Asignacion Docente creado exitosamente.')
    } catch (error) {
      console.error('Error al Asignar Docente:', error)
      setMensaje('Error al Asignacion Docente. Por favor, inténtalo de nuevo.')
    }
  }
  return (
    <>
    <h2 className='text-center mt-3'>Asignacion Docente Curso</h2>
        <Card className="formulario">
          {mensaje && <div className="mensaje">{mensaje}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre Docente</Form.Label>
            <Form.Control as="select" value={selectDocente} onChange={(e) => setSelectDocente(e.target.value)}>
              <option value="">Selecciona Nombre Docente</option>
              {docentes.map((docente) => (
                <option key={docente.docente_id} value={docente.docente_id}>{docente.nombre} {docente.apellido1}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Selecciona Curso</Form.Label>
            <Form.Control as="select" value={selectCurso} onChange={(e) => setSelectCurso(e.target.value)}>
              <option value="">Selecciona un Curso</option>
              {cursos.map((curso) => (
                <option key={curso.curso_id} value={curso.curso_id}>{curso.nombre}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button className='m-3' variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Card>
      </>
  )
}

export default DocenteCurso
