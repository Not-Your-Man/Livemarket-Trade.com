import React from 'react';
import { MdArrowRightAlt, MdMenuOpen } from "react-icons/md";
import { Link } from 'react-router-dom';


const Start = () => {
  return (
    <div className='relative bg-black md:h-[80vh] md:mt-32 md:px-5 px-3 font-Poppins'>
        <div className=''>
            <div className='md:flex md:space-x-5 md:space-y-0 space-y-3'>
                <div className='md:w-1/3 md:pb-0 pb-8'>
                    <div data-aos="fade-right" className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mt-[4px] text-[#0052FF]">
                            <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 
                            5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 
                            01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z">
                            </path>
                            <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 
                            0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 
                            0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z">
                            </path>
                            <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 
                            1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 
                            000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z">
                            </path>
                        </svg>
                       <Link to='/auth'> <p className='uppercase tracking-tighter font-semibold text-white'>Getting Started</p></Link>
                    </div>
                    <div className='py-3'>
                        <h1 data-aos="fade-right"  className='text-4xl tracking-wider capitalize text-white'>How it <span className='text-[#0052FF]'>works?</span></h1>
                    </div>
                    <div>
                        <p data-aos="fade-right" className='text-sm text-gray-200'>We all have to start somewhere. Let us help get you on the right track as you start your investing journey. With this innovative platform you'll be ready to start in no time. The fund is started in literally several minutes with minimal costs using blockchain-based infrastructure that infos. We believe it is incredibly important to redistribute this power & profitability.</p>
                    </div>
                    <div>
                        <Link to="/Auth">
                        <button data-aos="fade-up" className='bg-[#0052FF] md:mt-16 mt-10 flex space-x-3 text-white font-semibold rounded-lg px-5 py-3 '>
                            <p>Create an account</p> 
                            <MdArrowRightAlt size={25}/>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className='md:w-1/3 space-y-3'>
                    <div data-aos="fade-down" className='bg-white/10 px-3 py-5 rounded-lg'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-[#0052FF]">
                                <path fill-rule="evenodd" d="M10.362 1.093a.75.75 0 
                                00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 
                                6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 
                                12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clip-rule="evenodd">
                                </path>
                            </svg>
                            <p className='uppercase text-white text-xs font-semibold tracking-tighter'>Registration</p>
                        </div>
                        <div className='py-2 px-3'>
                            <h1 className='text-lg tracking-tighter capitalize text-white'>Create an <span className='text-[#0052FF]'>account</span></h1>
                        </div>
                        <div>
                            <p className='text-sm px-3'>
                            Getting started with us is really easy. 
                            Fill in the requested fields regarding your personal information and trading expertise to complete Client Area registration.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='bg-white/10 px-3 py-5 rounded-lg'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-[#0052FF]">
                                <path fill-rule="evenodd" d="M10.362 1.093a.75.75 0 
                                00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 
                                6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 
                                12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clip-rule="evenodd">
                                </path>
                            </svg>
                            <p className='uppercase text-white text-xs font-semibold tracking-tighter'>Investment Plans</p>
                        </div>
                        <div className='py-2 px-3'>
                            <h1 className='text-lg tracking-tighter capitalize text-white'>Make a <span className='text-[#0052FF]'>deposit</span></h1>
                        </div>
                        <div>
                            <p className='text-sm px-3'>
                            You have an unlimited access to our wide range of profitable assets to invest. 
                            Once your contract is started, your earnings will automatically be credited to you wallet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 space-y-3'>
                    <div data-aos="fade-down" className='bg-white/10 px-3 py-5 rounded-lg'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-[#0052FF]">
                                <path fill-rule="evenodd" d="M10.362 1.093a.75.75 0 
                                00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 
                                6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 
                                12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clip-rule="evenodd">
                                </path>
                            </svg>
                            <p className='uppercase text-white text-xs font-semibold tracking-tighter'>Financial Growth</p>
                        </div>
                        <div className='py-2 px-3'>
                            <h1 className='text-lg tracking-tighter capitalize text-white'><span className='text-[#0052FF]'>Trading</span> interception</h1>
                        </div>
                        <div>
                            <p className='text-sm px-3'>
                            Getting started with us is really easy. 
                            Fill in the requested fields regarding your personal information and trading expertise to complete Client Area registration.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='bg-white/10 px-3 py-5 rounded-lg'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2 text-[#0052FF]">
                                <path fill-rule="evenodd" d="M10.362 1.093a.75.75 0 
                                00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 
                                6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 
                                12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clip-rule="evenodd">
                                </path>
                            </svg>
                            <p className='uppercase text-white text-xs font-semibold tracking-tighter'>Withdrawals</p>
                        </div>
                        <div className='py-2 px-3'>
                            <h1 className='text-lg tracking-tighter capitalize text-white'>Make <span className='text-[#0052FF]'>withdrawal</span> request</h1>
                        </div>
                        <div>
                            <p className='text-sm px-3'>
                            Once earnings has been collected or claimed, you can confidently
                            head straight for the withdrawal section to withdraw your funds. 
                            Funds are immediately sent to your wallet address.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Start;