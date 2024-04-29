import Cookies from 'js-cookie'
import React, { Suspense } from 'react'
import { Navigate, Outlet, } from 'react-router-dom'

const PrivateRouter = ({ allowRoll }) => {



  const token = Cookies.get('authset')

  const userDataStr = localStorage.getItem('UserData');
  const userData = userDataStr ? JSON.parse(userDataStr) : null;
  const roleOfType = userData ? userData.map(user => user.roleOfType) : null;
  // console.log(roleOfType, 'roleOfType');

  const userDetailsCookie = Cookies.get('userDetails');
  const cookiedata = (JSON.parse(userDetailsCookie)) 
  const validcookie = cookiedata.roleOfType
   
  // console.log(validcookie,"sakdhkjahkj")

  // console.log(allowRoll, 'allowRoll')
  // if (roleOfType === allowRoll) {
  //   console.log(true, 'true')
  // } else {
  //   // navigate('/unauthorized')
  //   console.log(false, 'false')
  // }

  return token ?
    <Wrapper validcookie={validcookie} allowRoll={allowRoll} />
    :

    <Navigate to={'/login'} />


}


const Wrapper = ({ validcookie,allowRoll }) => {
  // console.log('est',validcookie, allowRoll,)
  // return   <Suspense fallback={<h1>Loading</h1>}><Outlet /></Suspense>
  return (

    allowRoll.includes(validcookie) ?

      <Suspense fallback={<h1>Loading</h1>}><Outlet /></Suspense> :

      <Navigate to={'/unauthorized'} />
  )
}
export default PrivateRouter
