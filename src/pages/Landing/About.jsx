import React from 'react'

const About = () => {
  return (
    <div className='h-[90vh] py-20 md:px-10 px-5 font-Poppins'>
        <div className='flex md:justify-center'>
            <div className="bg-white/10 capitalize flex item-center font-semibold px-3 py-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" 
            className="w-6 h-6 default_cursor_cs default_cursor_land">
                <path d="M16.5 7.5h-9v9h9v-9z" className="default_cursor_cs default_cursor_land"></path>
                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 
                0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 
                0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 
                0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 
                0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 
                0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clip-rule="evenodd" 
                className="default_cursor_cs default_cursor_land">
                </path>
            </svg>
                <p className="ml-2 text-sm lg:text-base md:text-base sm:text-base text-white">A brag little about us</p>
            </div>
        </div>
        <h3 className='lg:text-4xl md:text-3xl text-3xl md:text-center text-left text-white py-5'>We'll help you grow your money.</h3>
        <div className='flex justify-center'>
            <p className='md:text-center text-left text-white md:w-[39%]'>Livemarkets innovative trading platforms and tools provide the power and reliability you need to feel more confident in your trading.</p>
        </div>

        <div className='md:flex md:justify-between md:mx-32 pt-10 grid grid-cols-2 gap-10'>
        <div data-aos="fade-up" data-aos-delay="100" className="w-1/7 h-full">
            <div className="flex justify-center items-center default_cursor_cs default_cursor_land">
                <div className="p-4 rounded-full bg-[#0052FF20] default_cursor_cs default_cursor_land">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-6 h-6 text-[#0052FF] default_cursor_cs default_cursor_land">
                        <path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 
                        0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 
                        0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 
                        0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" 
                        clip-rule="evenodd" className="default_cursor_cs default_cursor_land">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="text-count my-3 text-center font-bold text-xl">
                <span className="font-extrabold">510</span>
                <span className="font-extrabold">K+</span>
            </div>
            <div className="count-res uppercase text-sm font-bold text-gray-400">
                <p>Successful <span className="">Trades</span> </p>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="inner w-1/7 h-full default_cursor_cs default_cursor_land">
            <div className="icon-cont flex justify-center items-center default_cursor_cs default_cursor_land">
                <div className="p-4 rounded-full bg-green-600/10 default_cursor_cs default_cursor_land">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-6 h-6 text-green-600 default_cursor_cs default_cursor_land">
                        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 
                        0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 
                        0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 
                        0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 
                        0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd">
                        </path>
                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 
                        0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 
                        0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 
                        0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="text-center my-3 font-bold text-xl default_cursor_cs default_cursor_land">
                <span className="font-extrabold">127</span><span className="font-extrabold">K+</span>
            </div>
            <div className="count-res uppercase text-sm font-bold text-gray-400">
                <p><span className="default_cursor_cs default_cursor_land">Happy</span> Customers</p>
            </div>
        </div>
            
        <div data-aos="fade-up" data-aos-delay="300" className="inner w-1/7 h-full default_cursor_cs default_cursor_land">
            <div className="icon-cont flex justify-center items-center default_cursor_cs default_cursor_land">
            <div className="p-4 rounded-full bg-fuchsia-700/10 default_cursor_cs default_cursor_land">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                className="w-6 h-6 text-fuchsia-600 default_cursor_cs default_cursor_land">
                    <path d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 
                    0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 
                    0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 
                    0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 
                    0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 
                    0 10-1.409.516c.059.16.116.321.17.483z" class="default_cursor_cs default_cursor_land">
                    </path>
                </svg>
            </div>
            </div>
            <div className="text-center my-3 font-bold text-xl default_cursor_cs default_cursor_land">
                <span className="font-extrabold">2017</span>
            </div>
            <div className="count-res uppercase text-sm font-bold text-gray-400">
                <p>Trading since</p>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="inner w-1/7 h-full default_cursor_cs default_cursor_land">
            <div className="icon-cont flex justify-center items-center default_cursor_cs default_cursor_land">
            <div className="p-4 rounded-full  bg-red-600/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 
                    0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 
                    0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 
                    0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                    </path>
                </svg>
            </div>
            </div>
            <div className="text-center my-3 font-bold text-xl default_cursor_cs default_cursor_land">
                <span className="font-extrabold">100%</span>
            </div>
            <div className="count-res uppercase text-sm font-bold text-gray-400">
                <p>Client satisfaction</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About;