import React from 'react';
import Hero from '../component/Hero';
import Header from '../component/Header';
import About from '../component/About';
import Services from '../component/Services';
import Footer from '../component/Footer';



function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About/>
    <Services />
    <Footer />
    </>
  )
}

export default Home
