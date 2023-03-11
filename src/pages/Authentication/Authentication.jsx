import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'

export const Authenticaton = () => {
  return (
    <Routes>
      <Route index element={<Navigate to='/register' />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
