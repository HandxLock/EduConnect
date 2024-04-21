import Beneficio from '../../components/publico/Beneficio'
import LineaPunteada from '../../components/publico/LineaPunteada'
import ContactForm from '../../components/publico/contacto'
import Footer from '../../components/publico/Footer'
import '../../styles/publico/footer.css'
import '../../styles/publico/homeStyle.css'
import '../../styles/publico/contacto.css'
function HomePage () {
  return (
    <div>
      <div id='navbar ' className='posicion'>
      </div>
      <div id="homepage" className="container text-center">

        <div className='d-lg-flex justify-content-center align-items-center container'>
          <h1 id='h1'>
            <strong >Simplifica </strong> , mejora la
            <strong> gestión </strong>
            y <strong>comunicación</strong> entre docente y alumnos.
          </h1>
          <img className='imagen' src='https://www.magisnet.com/wp-content/uploads/2020/08/alumnos-online.jpg'></img>
        </div>
      </div>
      <div className='d-flex mt-4 ' id="beneficios">
        <LineaPunteada/>
      </div>
      <div >
        <Beneficio />
      </div>
      <div className='d-flex mt-4' id='contacto'>
        <LineaPunteada/>
      </div>
      <div className="container d-flex justify-content-center ">
        <div className='formulario'>
          <ContactForm />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
