import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { createAlumno } from '../../services/alumnoService'
import { obtenerCursoPorColegioId } from '../../services/cursoService'

function FormularioAlumnoApoderado () {
  const { user } = useAuth()
  const [rut, setRut] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellidoPaterno, setApellidoPaterno] = useState('')
  const [apellidoMaterno, setApellidoMaterno] = useState('')
  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [cursos, setCursos] = useState([])
  const [selectCurso, setSelectCurso] = useState()
  const [mensaje, setMensaje] = useState('')
  const [rut1, setRut1] = useState('')
  const [nombre1, setNombre1] = useState('')
  const [apellidoPaterno1, setApellidoPaterno1] = useState('')
  const [apellidoMaterno1, setApellidoMaterno1] = useState('')
  const [email1, setEmail1] = useState('')
  const [clave1, setClave1] = useState('')
  const [direccion1, setDireccion1] = useState('')
  const [telefono1, setTelefono1] = useState('')

  useEffect(() => {
    // Función asincrónica para obtener los colegios y administradores al cargar el componente
    const fetchData = async () => {
      try {
        const cursoData = await obtenerCursoPorColegioId(user.colegio_id)
        setCursos(cursoData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [user.colegio_id])

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
        perfilId: 4
      }
      const usuario2 = {
        rut: rut1,
        nombre: nombre1,
        apellido1: apellidoPaterno1,
        apellido2: apellidoMaterno1,
        email: email1,
        clave: clave1,
        direccion: direccion1,
        telefono: telefono1,
        perfilId: 5
      }

      const alumno = {
        user: usuario,
        colegioID: user.colegio_id,
        cursoID: parseInt(selectCurso)

      }
      const apoderado = {
        user: usuario2,
        colegioID: user.colegio_id
      }

      await createAlumno(alumno, apoderado)
      setMensaje('Asignatura se creoexitosamente.')
    } catch (error) {
      console.error('Error al crear asignatura:', error)
      setMensaje('Error al crear asignatura. Por favor, inténtalo de nuevo.')
    }
  }
  return (
    <>
      <h2 className='text-center mt-3'>Crear Alumno</h2>
      <Card className="formulario">
        {mensaje && <div className="mensaje">{mensaje}</div>}
        <Form onSubmit={handleSubmit}>
          <div className='padre d-flex justify-content-between'>
          <div className='alumno'>
          <Form.Group>
            <Form.Label>Rut Alumno</Form.Label>
            <Form.Control type="string" placeholder="Rut Alumno" value={rut} onChange={(e) => setRut(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre Alumno</Form.Label>
            <Form.Control type="string" placeholder="Nombre Alumno" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido Paterno Alumno</Form.Label>
            <Form.Control type="string" placeholder="Apellido Paterno Alumno" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido Materno Alumno</Form.Label>
            <Form.Control type="string" placeholder="Apellido Materno Alumno" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Alumno</Form.Label>
            <Form.Control type="string" placeholder="Email Alumno" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Clave Alumno</Form.Label>
            <Form.Control type="string" placeholder="Clave Alumno" value={clave} onChange={(e) => setClave(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección Alumno</Form.Label>
            <Form.Control type="string" placeholder="Dirección Alumno" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono Alumno</Form.Label>
            <Form.Control type="string" placeholder="Teléfono Alumno" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Selecciona Curso</Form.Label>
            <Form.Control as="select" value={selectCurso} onChange={(e) => setSelectCurso(e.target.value)}>
              <option value="">Selecciona un Curso</option>
              {cursos.map((curso) => (
                <option key={curso.curso_id} value={curso.curso_id}>{curso.nombre}</option>
              ))}
            </Form.Control>
          </Form.Group>
          </div>
          <div className='apoderado'>
            <Form.Group>
            <Form.Label>Rut Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Rut Apoderado" value={rut1} onChange={(e) => setRut1(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Nombre Apoderado" value={nombre1} onChange={(e) => setNombre1(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido Paterno Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Apellido Paterno Apoderado" value={apellidoPaterno1} onChange={(e) => setApellidoPaterno1(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido Materno Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Apellido Materno Apoderado" value={apellidoMaterno1} onChange={(e) => setApellidoMaterno1(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Email Apoderado" value={email1} onChange={(e) => setEmail1(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Clave Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Clave Apoderado" value={clave1} onChange={(e) => setClave1(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Dirección Apoderado" value={direccion1} onChange={(e) => setDireccion1(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono Apoderado</Form.Label>
            <Form.Control type="string" placeholder="Teléfono Apoderado" value={telefono1} onChange={(e) => setTelefono1(e.target.value)} />
          </Form.Group>
          </div>
        </div>
          <Button variant="primary" type="submit" className="m-3">
            Ingresar
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default FormularioAlumnoApoderado
