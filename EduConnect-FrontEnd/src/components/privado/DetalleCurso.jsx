import { useEffect, useState } from 'react'
import { obtenerNombrePorCursoID } from '../../services/alumnoService'
import Table from 'react-bootstrap/Table'

function DetalleCurso ({ curso, cursoId }) {
  const [alumnos, setAlumnos] = useState([])
  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const data = await obtenerNombrePorCursoID(cursoId)
        setAlumnos(data)
      } catch (error) {
        console.error('Error fetching cursos:', error.message)
      }
    }

    fetchDatos()
  }, [cursoId])
  return (
     <Table striped bordered hover>
      <thead>
        <tr>
          <td colSpan="2"></td>
          <td colSpan="3" >Evaluacion Sumativa</td>
          <td colSpan="2" >Evaluacion Formativa</td>
          <td colSpan="2" >Evaluacion Sumativa</td>
        </tr>
        <tr>
          <th>#</th>
          <th style={{ textAlign: 'center' }}>Nombre</th>
          <th style={{ textAlign: 'center' }}>Evaluacion 1</th>
          <th style={{ textAlign: 'center' }}>Evaluacion 2</th>
          <th style={{ textAlign: 'center' }}>Evaluacion 3</th>
          <th style={{ textAlign: 'center' }}>Revision 1</th>
          <th style={{ textAlign: 'center' }}>Revision 2</th>
          <th style={{ textAlign: 'center' }}>Interrogación 1</th>
          <th style={{ textAlign: 'center' }}>Interrogación 2</th>
          <th style={{ textAlign: 'center' }}>Promedio</th>
        </tr>
      </thead>
      <tbody>
        {alumnos.map((alumno, index) => (
          <tr key={alumno.alumno_id}>
            <td>{index + 1}</td>
            <td >{`${alumno.nombre} ${alumno.apellido1}`}</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DetalleCurso
