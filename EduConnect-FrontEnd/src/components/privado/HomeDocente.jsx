import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { obtenerCurso } from '../../../src/services/cursoService.js'

function HomeDocente () {
  const [cursos, setCursos] = useState([])
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await obtenerCurso()

        setCursos(data)
      } catch (error) {
        console.error('Error fetching cursos:', error.message)
      }
    }

    fetchCursos()
  }, [])
  return (
    <>
    <h2 className='text-center mt-3'>Lista De Cursos</h2>
      <Row xs={1} md={3} className="g-4 m-4">
        {cursos.map(curso => (
          <Col key={curso.curso_id}>
            <Card className=''>
              <Card.Img variant="top" src={curso.imagenUrl} />
              <Card.Body>
                <Card.Title>{curso.nombre}</Card.Title>
                <Card.Text>
                  {curso.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeDocente
