import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-center content-center'>
        <div class="footer-container bg-black md:pl-20 md:pr-5 md:px-0 px-5 text-white default_cursor_cs default_cursor_land">
            <div class="grid-system grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 default_cursor_cs default_cursor_land">
                <div class="grid1 my-10 default_cursor_cs default_cursor_land">
                    <section class="broker-name text-3xl my-4 default_cursor_cs default_cursor_land">
                        {/* The Logo */}
                        <Logo/>
                    </section>
                    <section class="broker-writeup text-sm text-white/60">
                       Firstradeaucity is a financial investment company established by a group of professional traders and investors, 
                        who have fore seen the future of International Capital Market. The company has direct contracts with professional 
                        traders and miners around the world that guarantees the best services and ensures profits are made and remitted to investors daily.
                    </section>
                </div>
                <div class="grid2 flex justify-center flex-col">
                    <h2 class="text-xl my-4">
                        <div class="flex items-center default_cursor_cs default_cursor_land">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 
                                1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 
                                3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 
                                0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd">
                                </path>
                            </svg>
                            <p>Useful Links</p>
                        </div>
                    </h2>
                    <div class="links focus:outline-none focus:bg-none grid-cols-2 grid text-white/60 mx-2 transition-all cursor-pointer">
                        <div class="flex hover:text-white items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-white">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 
                                0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd">
                                </path>
                            </svg>
                           <Link to='/auth'><p class="text-sm capitalize">Getting Started</p></Link>
                        </div>
                        <div class="flex hover:text-white items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-white">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 
                                0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd">
                                </path>
                            </svg>
                          <Link to='/About'>  <p class="text-sm capitalize">About Us</p></Link>
                        </div>
                        <div class="flex hover:text-white items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-white default_pointer_cs default_pointer_land">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 
                                0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd">
                                </path>
                            </svg>
                            <p class="text-sm capitalize default_pointer_cs default_pointer_land">partners</p>
                        </div>
                        <div class="flex hover:text-white items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-white">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 
                                0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd">
                                </path>
                            </svg>
                           <Link to='/Benefits'> <p class="text-sm capitalize default_pointer_cs default_pointer_land">features &amp; benefits</p></Link>
                        </div>
                        <div class="flex hover:text-white items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-white">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 
                                0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd">
                                </path>
                            </svg>
                           <Link to='/Advantages'><p class="text-sm capitalize">testimonials</p></Link> 
                        </div>
                        <div class="flex hover:text-white items-center my-2 default_pointer_cs default_pointer_land">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-white">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 
                                0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd">
                                </path>
                            </svg>
                            <Link to='/faq'><p class="text-sm capitalize">FAQ</p></Link>
                        </div>
                    </div>
                    <a href="/auth">
                        <div class="flex items-center justify-center default_pointer_cs default_pointer_land">
                            <div class="flex w-2/3 items-center justify-center md:w-full my-5 px-6 py-4 bg-[#0052FF] rounded-lg default_pointer_cs default_pointer_land">
                               <Link to='/auth'> <p class="text-sm text-white">Create account</p></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-2 text-white">
                                    <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 
                                    0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="grid3 default_cursor_cs default_cursor_land">
                    <h2 class="text-xl my-9">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                                <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 
                                0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 
                                0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd">
                                </path>
                                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 
                                1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 
                                1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z">
                                </path>
                            </svg>
                            <p class="default_cursor_cs default_cursor_land">Contacts Information</p>
                        </div>
                    </h2>
                    <div class="phone-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex items-center justify-between">
                        <section class="phone-section flex items-center">
                            <div class="icon p-3 rounded-full  mr-4 opacity-60">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 
                                    0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 
                                    1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 
                                    1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
                                    </path>
                                </svg>
                            </div>
                            <div class="phonenum text-sm">
                                <div class="phone text-gray-200 font-bold default_pointer_cs default_pointer_land">Phone Contact</div>
                                <div class="phone text-gray-400 my-1 text-sm">+1 (555) - 6488</div>
                            </div>
                        </section>
                        <section class="icon-section"></section>
                    </div>
                    <div class="email-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex  items-center justify-between">
                        <section class="email-section flex items-center">
                            <div class="icon p-3 rounded-full  mr-4 opacity-60">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 
                                    0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 
                                    2.25 0 01-1.07-1.916V6.75">
                                    </path>
                                </svg>
                            </div>
                            <div class="emailadd text-sm">
                                <div class="email  text-gray-200 font-bold">E-mail Contact</div>
                                <div class="phone text-gray-400 my-1 text-sm">support@firstradeaucity.online</div>
                            </div>
                        </section>
                        <section class="icon-section"></section>
                    </div>
                    <div class="address-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex  items-center justify-between">
                        <section class="address-section flex items-center ">
                            <div class="icon p-3 rounded-full  mr-4 opacity-60">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 
                                    0 1115 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="text-sm">
                                <div class="email  text-gray-200 font-bold">Location</div>
                                <div class="phone text-gray-400 my-1 text-sm">firtradeaucity.online</div>
                            </div>
                        </section>
                        <section class="icon-section"></section>
                    </div>
                </div>
            </div>
            <div class="footer-message py-4 flex justify-center text-white/60 bg-black text-xs md:text-base default_cursor_cs default_cursor_land">© 2024 Firstradeaucity.online All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Footer;