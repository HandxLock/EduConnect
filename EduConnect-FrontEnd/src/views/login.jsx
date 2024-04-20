import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/login.css'

function Login () {
  return (
    <Container>
      <Row className='login-Cter'>
        {/* Columna izquierda */}
        <Col xs={12} md={6} className="text-center custom-col-dech shadow p-4">
          <section >
            <div className="titulos-div">
              <h2 className='titulosIz'><b>Inicia sesión aquí</b></h2>
            </div>
            <div className="w-5 mt-5">
              <input
                className='form-control'
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className='mt-5'>
              <input
                className='form-control'
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="remember mb-3 row mt-5">
              <div className="col-auto remember-mee">
                <input
                  className='remember-me form-check-input'
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                />
                <label htmlFor="remember-me" className="form-check-label">Recordarme</label>
              </div>
              <div className="col">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            <div className='mt-5'>
              <Button className='fs-4 w-50 shadow rounded-pill' variant="outline-primary"><b>Iniciar sesión</b></Button>
            </div>

            <p className='mt-5'>O usa tu cuenta</p>

            <div className='d-flex justify-content-center'>
              <a href="https://github.com/" className='m-3'><img src="https://cdn.hugeicons.com/icons/github-stroke-rounded.svg" alt="github" width="24" height="24" /></a>
              <a href="https://www.google.com/" className='m-3'><img src="https://cdn.hugeicons.com/icons/google-stroke-rounded.svg" alt="google" width="24" height="24" /></a>
              <a href="https://es-la.facebook.com/" className='m-3'><img src="https://cdn.hugeicons.com/icons/facebook-02-stroke-rounded.svg" alt="facebook-02" width="24" height="24" /></a>
            </div>
          </section>
        </Col>
        {/* Columna derecha */}
        <Col xs={12} md={6} className="text-center custom-col-izq custom-col-img shadow p-4">
          <section>
            <div>
              <h2 className='titulosDc text-white'><b>Comienza Tus registros ¡ahora!</b></h2>
            </div>
            <div>
              <p className='m-5 fs-4 text-white'>Si aun no tienes una cuenta, únete a nosotros</p>
            </div>
            <Button className='w-50 fs-4 shadow rounded-pill' variant="primary"><b>¡Contactanos!</b></Button>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
