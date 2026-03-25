import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/public/home/HeroSection";
import Design_Top_Product from "../../components/public/home/Design_Top_Product";
const HomePage = () => {
  return (
    <>
        <Navbar />
      <HeroSection />
      <Design_Top_Product />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default HomePage