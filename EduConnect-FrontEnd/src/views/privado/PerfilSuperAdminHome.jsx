import AsideSuperAdmin from '../../components/privado/AsideSuperAdmin'
import { Container, Col, Row } from 'react-bootstrap'
import HomeSuperAdmin from '../../components/privado/HomeSuperAdmin'

function PerfilSuperAdminHome () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <AsideSuperAdmin/>
        </Col>
        <Col xs={9}>
          <HomeSuperAdmin />
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilSuperAdminHome
