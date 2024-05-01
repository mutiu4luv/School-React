import React from 'react'
import { About, Contact, Courses, Home, Navbar, Teacher } from '../components'
import Testimony from '../components/container/Testimony'
import Footer from '../components/Footer/Footer'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Header from '../components/Header/Header'

const LandingPage = () => {
  return (
    <div>
      <TopNavBar />
      <Header />
       <div className="font-Poppins bg-Solitude containers">
      {/* <Navbar /> */}
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Testimony />
      {/* <Footer /> */}
    </div>
          <Footer />

    </div>
  )
}

export default LandingPage
