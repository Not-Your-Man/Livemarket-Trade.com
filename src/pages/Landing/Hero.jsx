import React from 'react';
import bg from "../../components/assets/images/hero_bg.webp";
import { MdArrowRightAlt, MdMenuOpen } from "react-icons/md";
import Widget from '../../components/assets/common/Widget';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='bg-black relative md:h-[90vh] h-[65vh] bg-no-repeat bg-center md:bg-right-bottom bg-cover' style={{
        backgroundImage: `url(${bg})`,
        // backgroundPositionY: "-200px",
        // backgroundPositionX: "100px"
    }}>
        <div className='absolute z-0 top-0 bg-black/70 w-full h-screen'></div>
       <div className='relative md:py-28 md:px-10 px-10 pt-20 z-2g0 opacity-100'>
            <div className='flex' data-aos="fade-right" data-aos-delay="300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 md:mt-[1px] mt-[-1px]">
                    <path fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                </svg>
                <h3 className='text-gray-400 uppercase md:text-sm text-xs'>Unlock the door to financial freedom</h3>
            </div>
            <div className=''>
                <h3 data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" className='lg:text-5xl md:text-4xl text-3xl md:w-full font-bold font-Montserrat tracking-tighter text-white md:pt-5 pt-5 md:pb-3 pb-5'>
                Discover a World, <br /> of Financial Freedom.
                </h3>
                <p className='md:w-1/3 w-full' data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="600">Embark on a transformative journey to financial mastery. Unveil the secrets of wealth creation and tap into infinite potential.</p>
            </div>
            <div className="flex md:mt-16 mt-10">
              <Link to='/auth'>
                <button data-aos="fade-up" data-aos-duration="3000" data-aos-delay="900" className='bg-white text-black flex space-x-1 py-2 px-5 rounded-lg'>
                  <p className='font-semibold text-sm md:text-base font-Montserrat'>Start Your Epic Journey</p>
                  <MdArrowRightAlt className='font-light ' size={25}/>
                </button>
              </Link>
            </div>
       </div>
       <div className='md:mt-0 mt-32'>
        <Widget/>
       </div>
    </div>
  )
}

export default Hero;