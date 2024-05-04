import { Container, Row, Col } from 'react-bootstrap'
import AsideSuperAdmin from '../../components/privado/AsideSuperAdmin'
import HomeSuperAdmin from '../../components/privado/HomeSuperAdmin'
function PerfilSuperAdminHome () {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <AsideSuperAdmin />
        </Col>
        <Col md={9}>
          <HomeSuperAdmin />
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilSuperAdminHome
