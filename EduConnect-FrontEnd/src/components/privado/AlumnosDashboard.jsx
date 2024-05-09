import { Container, Row, Col } from 'react-bootstrap'
import * as echarts from 'echarts'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { obtenerEvaluacionUsuarioId } from '../../services/evaluacionService.js'

const Dashboard = () => {
  const { user } = useAuth()
  const chartContainer = useRef(null)
  const [evaluaciones, setEvaluaciones] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(user.usuario_id)
        const evaluacionesData = await obtenerEvaluacionUsuarioId(user.usuario_id)
        console.log(evaluacionesData)
        setEvaluaciones(evaluacionesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [user.usuario_id])

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // const cantidadEvaluaciones = evaluaciones ? evaluaciones.length : 0

      const myChart = echarts.init(chartContainer.current)
      myChart.setOption({
        title: {
          text: 'Asignaturas'
        },
        xAxis: {
          type: 'category',
          data: evaluaciones.map((evaluacion) => evaluacion.nombre_evaluacion)
        },
        yAxis: {
          type: 'value'

        },
        series: [{
          data: evaluaciones.map((evaluacion) => evaluacion.calificacion),
          type: 'bar'
        }]
      })
    }
  }, [evaluaciones])

  return (
    <Container>
      <Row>
        <Col>
          <p>{user.id}</p>
          <div style={{ height: '65vh', marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '10px', alignSelf: 'center' }}>Calificaciones Alumno</h2>
            <p style={{ fontSize: '14px', marginBottom: '10px', alignSelf: 'center' }}>Notas por Alumno</p>
            <div ref={chartContainer} style={{ width: '100%', height: '100%' }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
