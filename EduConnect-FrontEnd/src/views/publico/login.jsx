import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { IconBrandGithub, IconBrandGoogle, IconBrandFacebook } from '@tabler/icons-react'
import '../../styles/publico/login.css'
import { useAuth } from '../../context/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google'
import LoginGoogle from './LoginGoogle'
function Login () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const { logeo, errors: logeoErrors, user } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(email, password)
      logeo({ email, password })
    } catch (error) {
      alert('Error de inicio de sesión. Por favor, verifica tus credenciales.')
    }
  }
  if (user) {
    if (user.perfil_id === 1) {
      navigate('/superadmin')
    } else if (user.perfil_id === 2) {
      navigate('/admin')
    } else if (user.perfil_id === 4) {
      navigate('/alumno')
    } else if (user.perfil_id === 3) {
      navigate('/docente')
    } else {
      navigate('/login')
    }
  }

  return (
    <Container>
      <Row className='login-Cter'>
        {/* Columna izquierda */}
        <Col xs={12} md={6} className="text-center custom-col-izq shadow p-4">
          <section>
            <div className="titulos-div">
              <h2 className='titulosIz'><b>Inicia sesión aquí</b></h2>
              {
                logeoErrors.map((error, i) => (
                  <div className='bg-red-500 p-2 text-red' key={i} >
                    {error}
                  </div>
                ))
              }
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-5 mt-5">
                <input
                  className='form-control'
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="form-check-label">Recordarme</label>
                </div>
                <div className="col">
                  <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
              <div className='mt-5'>
                <Button type="submit" className='fs-4 w-50 shadow rounded-pill' variant="outline-primary"><b>Iniciar sesión</b></Button>
              </div>
            </form>

            <p className='mt-5'>O usa tu cuenta</p>

            {
              <GoogleOAuthProvider
                clientId='478413847757-67v0cr4i1g3ctbdji14vrrkseq0fqhu7.apps.googleusercontent.com'
              >
                <LoginGoogle />
              </GoogleOAuthProvider>
            }
            <div className='d-flex justify-content-center'>
              <a href="https://github.com/" className='m-3'><IconBrandGithub size={25} stroke={2} /></a>
              <a href="https://www.google.com/" className='m-3'><IconBrandGoogle size={25} stroke={2} /></a>
              <a href="https://es-la.facebook.com/" className='m-3'><IconBrandFacebook size={25} stroke={2} /></a>
            </div>
          </section>
        </Col>
        {/* Columna derecha */}
        <Col xs={12} md={6} className="text-center custom-col-dech custom-col-img shadow p-4">
          <section>
            <div>
              <h2 className='titulosDc text-white'><b>Comienza Tus registros ¡ahora!</b></h2>
            </div>
            <div>
              <p className='m-5 fs-4 text-white'>Si aún no tienes una cuenta, únete a nosotros</p>
            </div>
            <Link to="/">
            <Button className='w-50 fs-4 shadow rounded-pill' variant="primary"><b>¡Contáctanos!</b></Button>
            </Link>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
