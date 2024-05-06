import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
// import useMostrarAlertaConfirmacion from '../../hooks/useMostrarAlertaConfirmacion'
import '../../styles/privado/formulario.css'
import { useState } from 'react'
import { agregarAdmin } from '../../../src/services/adminService.js'

function FormularioAdmin () {
  const [rut, setRut] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellidoPaterno, setApellidoPaterno] = useState('')
  const [apellidoMaterno, setApellidoMaterno] = useState('')
  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await agregarAdmin(rut, nombre, apellidoPaterno, apellidoMaterno, email, clave, direccion, telefono)
      setMensaje('Admin creado exitosamente.')
    } catch (error) {
      console.error('Error al agregar administrador:', error)
      setMensaje('Error al crear admin. Por favor, inténtalo de nuevo.')
    }
  }
  return (
        <>
        <h2 className='text-center mt-3'>Creacion Admin</h2>
      <Card className="formulario">
        {mensaje && <div className="mensaje">{mensaje}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Rut</Form.Label>
            <Form.Control type="string" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="string" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control type="string" placeholder="Apellido Paterno" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control type="string" placeholder="Apellido Materno" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="string" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Clave</Form.Label>
            <Form.Control type="string" placeholder="Clave" value={clave} onChange={(e) => setClave(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="string" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="string" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" className="m-3">
            Ingresar
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default FormularioAdmin
