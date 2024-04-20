import '../styles/aside.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Image from 'react-bootstrap/Image'

function AsideSuperAdmin () {
  return (
        <>
            <div className="aside">
                <div className='perfil'>
                    <Image src="https://es.seaicons.com/wp-content/uploads/2015/06/user-male-icon.png" roundedCircle />
                    <h3>SuperAdmin</h3>
                    <p>Profile</p>
                </div>
                <DropdownButton id="dropdown-basic-button" title="Selecciona" className=''>
                     <Dropdown.Item href='formularioColegio'>Colegio</Dropdown.Item>
                     <Dropdown.Item href="formularioAdmin">Administrador</Dropdown.Item>
                     <Dropdown.Item href="#/asignarColegio">Asignar Colegio</Dropdown.Item>
                 </DropdownButton>

            </div>
        </>
  )
}
export default AsideSuperAdmin
