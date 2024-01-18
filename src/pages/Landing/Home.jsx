import React from 'react';
import Nav from '../../components/assets/common/Nav';
import Hero from './Hero';
import Start from './Start';
import About from './About';
import Benefits from './Benefits';
import Advantages from './Advantages';
import Footer from '../../components/assets/common/Footer';
import Faq from './Faq';

const Home = () => {
  return (
    <div className='bg-black'>
      <Nav/>
      <div className='md:mt-20 md:pt-0 pt-24'>
        <Hero/>
        <Start />
        <About/>
        <Benefits/>
        <Advantages/>
        <Faq/>
        <Footer/>
      </div>    
    </div>
  )
}

export default Home;