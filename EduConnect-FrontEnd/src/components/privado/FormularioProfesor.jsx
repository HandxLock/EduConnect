import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import '../../styles/privado/formulario.css'
import { useState, useEffect } from 'react'
import { createDocente } from '../../services/docenteService'
import { useAuth } from '../../context/AuthContext'
import { obtenerAsignatura } from '../../services/asignaturaService'

function FormularioProfesor () {
  const { user } = useAuth()
  const [rut, setRut] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellidoPaterno, setApellidoPaterno] = useState('')
  const [apellidoMaterno, setApellidoMaterno] = useState('')
  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [asignaturas, setAsignaturas] = useState([])
  const [selectAsignaruta, setSelectAsignatura] = useState()

  useEffect(() => {
    // Función asincrónica para obtener los colegios y administradores al cargar el componente
    const fetchData = async () => {
      try {
        const asignaturaData = await obtenerAsignatura()
        setAsignaturas(asignaturaData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const usuario = {
        rut,
        nombre,
        apellido1: apellidoPaterno,
        apellido2: apellidoMaterno,
        email,
        clave,
        direccion,
        telefono,
        perfilId: 3
      }
      const docente = {
        user: usuario
      }
      await createDocente(docente, user.colegio_id, parseInt(selectAsignaruta))
      setMensaje('Asignatura se creoexitosamente.')
    } catch (error) {
      console.error('Error al crear asignatura:', error)
      setMensaje('Error al crear asignatura. Por favor, inténtalo de nuevo.')
    }
  }
  return (
        <>
        <h2 className='text-center mt-3'>Creacion Docente</h2>
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
          <Form.Group>
            <Form.Label>Selecciona Asignatura</Form.Label>
            <Form.Control as="select" value={selectAsignaruta} onChange={(e) => setSelectAsignatura(e.target.value)}>
              <option value="">Selecciona una Asignaruta</option>
              {asignaturas.map((asignatura) => (
                <option key={asignatura.asignatura_id} value={asignatura.asignatura_id}>{asignatura.nombre}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="m-3">
            Ingresar
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default FormularioProfesor
