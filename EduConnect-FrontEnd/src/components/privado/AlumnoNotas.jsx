import PropTypes from 'prop-types'

const NotasAlumno = ({ notas }) => {
  const notasStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    height: '100%'
  }

  const h2Style = {
    fontSize: '20px',
    marginBottom: '10px'
  }

  const liStyle = {
    marginBottom: '5px'
  }

  return (
    <div style={notasStyle}>
      <h2 style={h2Style}>Notas de Alumnos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notas.map((nota, index) => (
          <li key={index} style={liStyle}>{nota}</li>
        ))}
      </ul>
    </div>
  )
}

NotasAlumno.propTypes = {
  notas: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default NotasAlumno
