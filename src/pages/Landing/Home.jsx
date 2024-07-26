import React, { useState, useEffect } from 'react';
import Nav from '../../components/assets/common/Nav';
import Hero from './Hero';
import Start from './Start';
import About from './About';
import Benefits from './Benefits';
import Advantages from './Advantages';
import Footer from '../../components/assets/common/Footer';
import Faq from './Faq';




const Home = () => {
  useEffect(() => {
    // Add Smartsupp Live Chat script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.smartsuppchat.com/loader.js?';
    script.async = true;
    script.onload = () => {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = '1d4ce57af53c398cc0cd615f13011c8d09b1aeb8';
    };
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
   <div className='bg-black md:mt-5 md:pt-0 pt-24px w-[100%] p-0 m-0'>
      <Nav/> 
      <div className=' '>
        <Hero />
        <Start />
        <About />
        <Benefits />
        <Advantages />
        <Faq />
        <Footer />
      </div>
      </div>
  )
}

export default Home;