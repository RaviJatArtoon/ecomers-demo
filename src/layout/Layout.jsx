import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'

const Layout = () => {
    return (
        <div className='layout' >
            <div className='container'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
