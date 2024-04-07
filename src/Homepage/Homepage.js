import React from 'react'
import NavBar from '../Components/Navbar/Navbar'
import Main1 from './Sections/Main1/Main1'
import Banner from './Sections/Banner/Banner'
import Footer from '../Components/Footer/Footer'

export default function Homepage() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Main1></Main1>
      <Footer></Footer>
    </div>
  )
}
