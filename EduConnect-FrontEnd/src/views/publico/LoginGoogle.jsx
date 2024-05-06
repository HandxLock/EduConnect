import { redirect } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

function LoginGoogle () {
  const handleError = (error) => {
    console.error('Error: ', error)
  }

  const handleSuccess = (response) => {
    console.log(response)
    console.log(redirect)
    redirect('/superadmin')
  }

  return (
    <GoogleLogin
      onError={handleError}
      onSuccess={handleSuccess}
    />
  )
}

export default LoginGoogle
