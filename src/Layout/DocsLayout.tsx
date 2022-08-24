import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import HeaderDocs from '../features/pages/Docs/components/HeaderDocs/HeaderDocs';

const DocsLayout = () => {
  return (
    <>
    <HeaderDocs />
    
    <Outlet />
    {/* <Footer /> */}
  </>
  )
}

export default DocsLayout
