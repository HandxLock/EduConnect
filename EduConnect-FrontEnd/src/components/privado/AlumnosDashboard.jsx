import { Container, Row, Col } from 'react-bootstrap';
import * as echarts from 'echarts'; 
import { useEffect, useRef } from 'react';

const Dashboard = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const myChart = echarts.init(chartContainer.current);
      myChart.setOption({
        title: {
          text: 'Asignaturas'
        },
        xAxis: {
          type: 'category',
          data: ['Lenguaje', 'Matemáticas', 'Biología', 'Física', 'Ed Física']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [6.5, 4, 5.7, 7, 2],
          type: 'bar'
        }]
      });
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ height: '65vh', marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '10px', alignSelf: 'center' }}>Calificaciones Alumno</h2>
            <p style={{ fontSize: '14px', marginBottom: '10px', alignSelf: 'center' }}>Notas por Alumno</p>
            <div ref={chartContainer} style={{ width: '100%', height: '100%' }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
