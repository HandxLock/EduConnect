import { Col, Container, Row } from 'react-bootstrap'
import NotasAlumno from '../../components/privado/AlumnoNotas'
import AnotacionesAlumno from '../../components/privado/AlumnoAnotaciones'
import ObservacionesAlumno from '../../components/privado/AlumnoObservaciones'
import AsideAlumno from '../../components/privado/AlumnoAside'
import AlumnosDashboard from '../../components/privado/AlumnosDashboard'
import '../../styles/privado/views.css'
import { useAuth } from '../../context/AuthContext'
import { obtenerEvaluacionUsuarioId } from '../../services/evaluacionService.js'
import { obtenerObservacionesUsuarioId } from '../../services/obervacionService.js'
import { useEffect, useState } from 'react'
const Views = () => {
  const { user } = useAuth()
  const [evaluaciones, setEvaluaciones] = useState([])
  const [observaciones, setObservaciones] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(user.usuario_id)
        const evaluacionesData = await obtenerEvaluacionUsuarioId(user.usuario_id)
        const observacionesData = await obtenerObservacionesUsuarioId(user.usuario_id)
        console.log(evaluacionesData)
        setEvaluaciones(evaluacionesData)
        setObservaciones(observacionesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [user.usuario_id])
  const anotaciones = ['1-Falta de atención', '2-Participa mucho en clase']

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
              <NotasAlumno notas={evaluaciones.map((evaluacion) => evaluacion.calificacion)} />
            </Col>
            <Col sm={12} md={3}>
              <AnotacionesAlumno anotaciones={anotaciones} />
            </Col>
            <Col sm={12} md={3}>
              <ObservacionesAlumno observaciones={observaciones.map((observacion) => observacion.descripcion)} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Views
