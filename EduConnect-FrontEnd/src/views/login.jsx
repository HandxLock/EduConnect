import { Container, Row, Col } from 'react-bootstrap'
import '../styles/login.css'

function Login () {
  return (
    <Container>
      <Row className='login-Cter'>
        <Col className="text-center custom-col-dech jus">
          <section>
            <div className="titulos-div">
              <h2 className='titulos'><b>Inicia sesión aquí</b></h2>
            </div>
            <div>
              <div>
                <input
                  className='inputs'
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                />
              </div>
              <div>
                <input
                  className='inputs'
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  required
                />
              </div>
            </div>
            <div className='remember-me'>
              <label htmlFor="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                />
                Recordarme
              </label>
            </div>
          </section>
        </Col>
        <Col className="text-center custom-col-izq">
          Third, but first
        </Col>
      </Row>
    </Container>
  )
}

export default Login
