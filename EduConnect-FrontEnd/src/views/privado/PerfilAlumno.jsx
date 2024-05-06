import { Col, Container, Row } from 'react-bootstrap'
import NotasAlumno from '../../components/privado/AlumnoNotas'
import AnotacionesAlumno from '../../components/privado/AlumnoAnotaciones'
import ObservacionesAlumno from '../../components/privado/AlumnoObservaciones'
import AsideAlumno from '../../components/privado/AlumnoAside'
import AlumnosDashboard from '../../components/privado/AlumnosDashboard'
import '../../styles/privado/views.css'

const Views = () => {
  const notas = [6.5, 4.0, 5.7, 7.0, 2.0]
  const anotaciones = ['1-Falta de atención', '2-Participa mucho en clase']
  const observaciones = ['1-Alumno con buen rendimiento académico', '2-Necesita mejorar en matemáticas']

  return (
    <Container fluid className='views-container'>
      <Row>
        <Col md={3}>
          <AsideAlumno />
        </Col>
        <Col md={9}>
          <Row>
            <Col md={12}>
              <AlumnosDashboard />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <NotasAlumno notas={notas} />
            </Col>
            <Col sm={12} md={3}>
              <AnotacionesAlumno anotaciones={anotaciones} />
            </Col>
            <Col sm={12} md={3}>
              <ObservacionesAlumno observaciones={observaciones} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Views
