import React from 'react'
import { Navigate, Outlet, } from 'react-router-dom'

const PublicRouter = () => {
  const token = false

  return !token ? <Outlet /> : <Navigate to={'/'} />
}
export default PublicRouter
