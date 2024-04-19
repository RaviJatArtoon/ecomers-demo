import Cookies from 'js-cookie'
import React, { Suspense } from 'react'
import { Navigate, Outlet, } from 'react-router-dom'

const PrivateRouter = () => {
  const token = Cookies.get('authset')
  console.log(token)


  return token ? <Suspense fallback={<h1>Loading</h1>}><Outlet /></Suspense> : <Navigate to={'/login'} />
}
export default PrivateRouter
