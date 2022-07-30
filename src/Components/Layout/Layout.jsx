import './Layout.css'
import Header from '../Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

/**
 * Create a layout with principal component
 * @returns { JSX }
*/

function Layout() {
  
  return (
  <>
    <Header />
    <Outlet />
  </>
  )

}

export default Layout