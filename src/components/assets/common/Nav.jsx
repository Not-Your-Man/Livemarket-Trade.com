import React,{ useState, useEffect } from 'react';
import { MdArrowRightAlt } from "react-icons/md";


const Nav = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollpos(currentScrollPos);
    };
  }, [prevScrollpos]);

  return (
    <div className=''>
      <nav className={`bg-black w-full mx-auto top-0 transition-all duration-300 z-10 ${visible ? 'py-5 fixed' : '-py-32'}`}>
        <div className="relative px-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className='text-3xl font-Lobster font-bold tracking-wider text-blue-700'>Logo</h1>
            </div>
            <div className="md:hidden hidden lg:flex space-x-4 text-white text-sm">
              <a href="#home" className="">Home</a>
              <a href="#about">Getting-started</a>
              <a href="#services">About-us</a>
              <a href="#contact">Features & Benefits</a>
              <a href="#contact">Advantages</a>
              <a href="#contact">FAQS</a>
            </div>
            <div className="flex space-x-4 items-center">
              <button className='bg-blue-700 text-white flex space-x-1 py-2 px-5 rounded-lg'>
                <p className='font-semibold'>Get started</p>
                <MdArrowRightAlt className='font-light ' size={25}/>
              </button>
            </div>
            {/* <div className="flex space-x-4 items-center">
              <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center">5</div>
              <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;