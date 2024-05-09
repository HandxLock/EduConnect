import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import DetalleCurso from './DetalleCurso'
import { obtenerCursoPorColegioId } from '../../services/cursoService'
import { useAuth } from '../../context/AuthContext'
function HomeAdmin () {
  const { user } = useAuth()
  const [cursos, setCursos] = useState([])
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null)
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await obtenerCursoPorColegioId(user.colegio_id)
        setCursos(data)
      } catch (error) {
        console.error('Error fetching cursos:', error.message)
      }
    }

    fetchCursos()
  }, [user.colegio_id])

  const handleClick = (curso) => {
    setCursoSeleccionado(curso)
  }

  if (cursoSeleccionado) {
    return <DetalleCurso cursoId={cursoSeleccionado.curso_id} curso={cursoSeleccionado} />
  }

  return (
    <>
      <h2 className='text-center mt-3'>Lista De Cursos</h2>
      <Row xs={1} md={3} className="g-4 m-4">
        {cursos.map((curso) => (
          <Col key={curso.curso_id}>
            <Card className='' onClick={() => handleClick(curso)}>
              <Card.Img variant="top" src={curso.imagenUrl} />
              <Card.Body>
                <Card.Title>{curso.nombre}</Card.Title>
                <Card.Text>{curso.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeAdmin
