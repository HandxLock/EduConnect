import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './views/HomePage'
import Login from './views/login.jsx'

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
