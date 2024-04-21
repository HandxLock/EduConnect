import AsideAdmin from '../components/AsideAdmin'
import { Container, Col, Row } from 'react-bootstrap'
import HomeAdmin from '../components/HomeAdmin'

function PerfilAdminHome () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <AsideAdmin/>
        </Col>
        <Col xs={9}>
          <HomeAdmin/>
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilAdminHome
