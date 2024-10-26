import React from 'react';
import Hero from '../component/Hero';
import Header from '../component/Header';
import About from '../component/About';
import Services from '../component/services';
import Footer from '../component/footer';



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