import Aside from '../components/Aside'
import { Container, Col, Row } from 'react-bootstrap'
import HomeSuperAdmin from '../components/HomeSuperAdmin'

function PerfilSuperAdminHome () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <Aside/>
        </Col>
        <Col xs={9}>
          <HomeSuperAdmin />
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilSuperAdminHome
