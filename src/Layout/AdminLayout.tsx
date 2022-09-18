import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
      {/* <HeaderAdmin /> */}
      <Outlet />
    </>
  )
}

export default AdminLayout
