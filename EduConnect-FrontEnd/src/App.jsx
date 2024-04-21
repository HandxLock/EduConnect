import { Routes, Route } from 'react-router-dom'
import NavBar from './components/publico/NavBar.jsx'
import HomePage from './views/publico/HomePage.jsx'
import Login from './views/publico/login.jsx'

function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
