import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='container h-100 w-50 mt-5'>
      <h1 className='text-center pt-5 mb-5'>Welcome to My U Library</h1>
      <LoginForm/>
    </div>
  )
}

export default Login