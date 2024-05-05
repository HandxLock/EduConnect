import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { getColegios } from '../../../src/services/colegioService.js'

function HomeSuperAdmin () {
  const [colegios, setColegios] = useState([])
  useEffect(() => {
    const fetchColegios = async () => {
      try {
        const data = await getColegios()

        setColegios(data)
      } catch (error) {
        console.error('Error fetching colegios:', error.message)
      }
    }

    fetchColegios()
  }, [])
  return (
    <>
    <h2 className='text-center mt-3'>Lista De Colegios</h2>
      <Row xs={1} md={3} className="g-4 m-4">
        {colegios.map(colegio => (
          <Col key={colegio.colegio_id}>
            <Card className=''>
              <Card.Img variant="top" src={colegio.imagenUrl} />
              <Card.Body>
                <Card.Title>{colegio.nombre}</Card.Title>
                <Card.Text>
                  {colegio.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeSuperAdmin
