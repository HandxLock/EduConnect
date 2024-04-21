import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function HomeSuperAdmin () {
  return (
    <>
    <Row xs={1} md={3} className="g-4 m-4">
        <Col>
          <Card className=''>
            <Card.Img variant="top" src="https://www.colegiosiria.cl/wp-content/uploads/Bienvenida-2023-Media.jpg" />
            <Card.Body>
              <Card.Title>Colegio República de Siria</Card.Title>
              <Card.Text>
                Colegio Republica de Siria
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=''>
            <Card.Img variant="top" src="https://www.colegiosiria.cl/wp-content/uploads/Bienvenida-2023-Media.jpg" />
            <Card.Body>
              <Card.Title>Colegio República de Siria</Card.Title>
              <Card.Text>
                Colegio Republica de Siria
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=''>
            <Card.Img variant="top" src="https://www.colegiosiria.cl/wp-content/uploads/Bienvenida-2023-Media.jpg" />
            <Card.Body>
              <Card.Title>Colegio República de Siria</Card.Title>
              <Card.Text>
                Colegio Republica de Siria
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <br />

    </Row>
    </>
  )
}

export default HomeSuperAdmin
