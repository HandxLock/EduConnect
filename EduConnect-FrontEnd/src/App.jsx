import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import Login from './views/login.jsx'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
