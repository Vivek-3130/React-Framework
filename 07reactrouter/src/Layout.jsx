import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
// As the headr and footer are going to remain same therefore
// we are using a single page layout.jsx and putting things in
// one file to display


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
// what does the outlet does here
export default Layout