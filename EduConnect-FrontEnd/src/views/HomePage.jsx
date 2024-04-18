import Beneficio from '../components/Beneficio'
import LineaPunteada from '../components/LineaPunteada'
import ContactForm from '../components/contacto'
import '../styles/homeStyle.css'
function HomePage () {
  return (
    <div>
      <div id="homepage" className="container text-center">
        <div className='d-lg-flex justify-content-center align-items-center container '>
          <h1 id='h1'>
            <strong >Simplifica </strong> , mejora la
            <strong> gestión </strong>
            y <strong>comunicación</strong> entre docente y alumnos.
          </h1>
          <img className='imagen' src='https://www.magisnet.com/wp-content/uploads/2020/08/alumnos-online.jpg'></img>
        </div>
      </div>
      <div className='d-flex mt-4 '>
        <LineaPunteada/>
      </div>
      <div id="beneficios" className="container">
        <Beneficio />
      </div>
      <div className='d-flex mt-4 '>
        <LineaPunteada/>
      </div>
      <div id="contacto" className="container">
        <ContactForm/>
      </div>
    </div>
  )
}

export default HomePage
