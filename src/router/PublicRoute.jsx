import Cookies from 'js-cookie'
import React, { Suspense } from 'react'
import { Navigate, Outlet, } from 'react-router-dom'

const PublicRouter = () => {
  const token = Cookies.get('authset')
  // console.log(token)

  return !token ? <Suspense><Outlet /></Suspense> : <Navigate to={'/dashbord'} />
}
export default PublicRouter
