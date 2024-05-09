import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
// import useMostrarAlertaConfirmacion from '../../hooks/useMostrarAlertaConfirmacion'
import '../../styles/privado/formulario.css'
import { agregarColegio } from '../../../src/services/colegioService.js'
import { useState } from 'react'
function FormularioColegio () {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [rut, setRut] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')

  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await agregarColegio(nombre, descripcion, rut, direccion, telefono, email)
      setMensaje('Colegio creado exitosamente.')
    } catch (error) {
      console.error('Error al agregar colegio:', error)
      setMensaje('Error al crear Colegio. Por favor, inténtalo de nuevo.')
    }
  }

  return (
        <>
        <h2 className='text-center mt-3'>Creacion Colegio</h2>
        <Card className="formulario">
          {mensaje && <div className="mensaje">{mensaje}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre Establecimiento</Form.Label>
            <Form.Control type="string" placeholder="Establecimiento" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="string" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>RUT</Form.Label>
            <Form.Control type="string" placeholder="RUT" value={rut} onChange={(e) => setRut(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="string" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="string" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="string" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Button className='m-3' variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Card>
        </>
  )
}

export default FormularioColegio
