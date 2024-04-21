import Card from 'react-bootstrap/Card'
import '../../styles/publico/beneficios.css'

function Beneficio () {
  return (
    <div>
      <div className='h2-beneficios'>
        <h2>Beneficios</h2>
      </div>
      <div className='d-flex p-4 mx-n1 beneficio'>
        <Card style={{ width: '16rem' }} className='mx-2'>
          <Card.Img variant="top" src="https://i0.wp.com/www.aula1.com/wp-content/uploads/gestion-academica-grand.jpg?resize=526%2C518&ssl=1" />
          <Card.Body>
            <Card.Title>Simplificación de la gestión académica</Card.Title>
            <Card.Text>
              Herramientas intuitivas y fáciles de usar
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }} className='mx-2'>
          <Card.Img variant="top" src="https://img.freepik.com/vector-gratis/concepto-comunicacion-empresarial-diseno-plano_52683-76461.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1713398400&semt=ais" />
          <Card.Body>
            <Card.Title>Mejora de la comunicación</Card.Title>
            <Card.Text>
              Facilita la comunicación entre docentes, estudiantes y apoderados al centralizar la información relevante en un solo lugar.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }} className='mx-2'>
          <Card.Img variant="top" src="https://www.brandlima.com/wp-content/uploads/2020/01/marketing-para-colegios.png" />
          <Card.Body>
            <Card.Title>Control completo de la institución</Card.Title>
            <Card.Text>
              Completo sobre su institución al proporcionar herramientas para llevar un seguimiento detallado de aspectos académicos y administrativos.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }} className='mx-2'>
          <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/011/058/807/non_2x/the-boy-was-very-happy-and-happy-because-he-got-good-grades-from-competitive-exams-illustration-free-vector.jpg" />
          <Card.Body>
            <Card.Title>Eficiencia en la gestión de calificaciones</Card.Title>
            <Card.Text>
              Gestiona las calificaciones de los estudiantes de manera eficiente, lo que les permite subir notas de manera rápida y precisa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }} className='mx-2'>
          <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/4435/4435924.png" />
          <Card.Body>
            <Card.Title>Personalización del seguimiento académico</Card.Title>
            <Card.Text>
              Registra observaciones individuales y acceder a un dashboard personalizado con estadísticas de rendimiento y gráficos de progreso
            </Card.Text>
          </Card.Body>
        </Card>
    </div>

    </div>
  )
}

export default Beneficio
