import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='container-lg'>
      <Header/>
      <Outlet/>
    </main>
  )
}

export default Layout