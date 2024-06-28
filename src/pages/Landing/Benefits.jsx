import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import Stocks from '../../components/assets/common/Stocks';


const Benefits = () => {
  return (
    <div className='bg-black md:py-20 md:pt-0 pt-32 md:px-10 px-5 font-Poppins'>
        <div data-aos="fade-up" className='md:flex md:justify-between md:space-x-5 md:space-y-0 space-y-3'>
            <div className='md:w-[40%]'>
                <div className='flex space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                        className="w-5 h-5 mr-2  text-[#0052FF] default_cursor_cs default_cursor_land">
                        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 
                        0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 
                        0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 
                        0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 
                        0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 
                        0 001.14-.094l3.75-5.25z" clipRule="evenodd" className="default_cursor_cs default_cursor_land">
                        </path>
                    </svg>
                    <p className='uppercase font-bold text-white text-sm mt-[1px]'>FEATURES & BENEFITS</p>
                </div>
                <div className='text-white'>
                    <p className='text-3xl py-5 capitalize font-semibold'>Get <span className='text-[#0052FF]'>Exceptional</span> Services!!</p>
                    <p className='text-sm'>Immerse yourself in an unparalleled experience of exceptional service. 
                        Our dedicated team is committed to exceeding your expectations with meticulous attention 
                        to detail and personalized care. From the moment you arrive, we create a warm and 
                        sophisticated atmosphere tailored to your desires.
                    </p>
                </div>
                <div>
                    <Link to= "/Auth">
                    <button className='bg-[#0052FF] mt-16 flex space-x-3 text-white rounded-lg px-5 py-3 '>
                        <p>Start enjoying benefits</p> 
                        <MdArrowRightAlt size={25}/>
                    </button>
                    </Link>
                </div>
            </div>

            <div className='md:w-[30%] space-y-3'>
                <div className='bg-[#111] rounded-lg py-5 px-3'>
                    <div className="cont flex items-center uppercase font-semibold opaity-70 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                            className="w-4 h-4 mr-2 text-[#0052FF] default_cursor_cs default_cursor_land">
                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 
                            0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 
                            0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 
                            0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 
                            0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 
                            0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 
                            0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" className="">
                            </path>
                        </svg>
                        <p className="default_cursor_cs default_cursor_land">Benefits</p>
                    </div>
                    <div className="large-text capitalize text-lg py-2 font-semibold ml-3 default_cursor_cs default_cursor_land">
                        <p className="text-white">Safe &amp; <span className="text-[#0052FF]">Secure</span> </p>
                    </div>
                    <div className="stepBody">
                        <div className="body-cont text-sm px-3 text-gray-400 default_cursor_cs default_cursor_land">
                            <p>This platform is built and maintained with maximum security in order to retain the ability to keep the trust of it's users.</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#111] rounded-lg py-5 px-3'>
                    <div className="cont flex items-center uppercase font-semibold opaity-70 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                            className="w-4 h-4 mr-2 text-[#0052FF] default_cursor_cs default_cursor_land">
                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 
                            0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 
                            0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 
                            0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 
                            0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 
                            0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 
                            0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" className="">
                            </path>
                        </svg>
                        <p className="default_cursor_cs default_cursor_land">Benefits</p>
                    </div>
                    <div className="large-text capitalize text-lg py-2 font-semibold ml-3 default_cursor_cs default_cursor_land">
                        <p className="text-white">Profitable <span className="text-[#0052FF]">Assets</span> </p>
                    </div>
                    <div className="stepBody">
                        <div className="body-cont text-sm px-3 text-gray-400 default_cursor_cs default_cursor_land">
                            <p>All assets enlisted on this platform have been tested and found to be really profitable to make any sort of investment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:w-[30%] space-y-3'>
                <div className='bg-[#111] rounded-lg py-5 px-3'>
                        <div className="cont flex items-center uppercase font-semibold opaity-70 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="w-4 h-4 mr-2 text-[#0052FF] default_cursor_cs default_cursor_land">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 
                                0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 
                                0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 
                                0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 
                                0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 
                                0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 
                                0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" className="">
                                </path>
                            </svg>
                            <p className="default_cursor_cs default_cursor_land">Features</p>
                        </div>
                        <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
                            <p className="text-white"><span className="text-[#0052FF]">Secure</span> Wallet </p>
                        </div>
                        <div className="stepBody">
                            <div className="body-cont text-sm px-3 text-gray-400 default_cursor_cs default_cursor_land">
                                <p>Each user's wallet is safe and secured, as all asset, funds are stored in a secured offline storage system.</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#111] rounded-lg py-5 px-3'>
                        <div className="cont flex items-center uppercase font-semibold opaity-70 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="w-4 h-4 mr-2 text-[#0052FF] default_cursor_cs default_cursor_land">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 
                                0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 
                                0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 
                                0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 
                                0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 
                                0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 
                                0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" className="">
                                </path>
                            </svg>
                            <p className="default_cursor_cs default_cursor_land">Features</p>
                        </div>
                        <div className="large-text capitalize text-lg py-2 font-semibold ml-3 default_cursor_cs default_cursor_land">
                            <p className="text-white"><span className="text-[#0052FF]">Instant</span> Withdrawals </p>
                        </div>
                        <div className="stepBody">
                            <div className="body-cont text-sm px-3 text-gray-400 default_cursor_cs default_cursor_land">
                                <p>Choose the amount to withdraw and receive it instantly, to your preferred crypto wallet in your account, instantly.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div data-aos="fade-up" className='md:justify-center pt-10'>
            <div className=''>
              
            </div>
            <div>
                <section className="">
                    <div className="">
                       
                            <div 
                            className="aos-init default_cursor_cs default_cursor_land" 
                            data-aos="fade-up" 
                            data-aos-delay="400">
                                <div className='py-0 px-10 width: 100% '><Stocks /></div>
                        </div>
                    </div>
                   
                </section> </div>
        </div>
    </div>
  )
}

export default Benefits;