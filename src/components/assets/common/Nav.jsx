import React, { useState, useEffect, useRef } from 'react';
import { MdArrowRightAlt, MdMenu, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Nav = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollpos(currentScrollPos);
    };

    // Add event listener to handle click outside of the mobile menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prevScrollpos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className=''>
      <nav className={`bg-black w-full mx-relative fixed top-0 transition-all duration-300 z-10 ${visible ? 'py-5 fixed' : '-py-32 relative'}`}>
        <div className="relative px-5">
          <div className="flex justify-between items-center">
            <div className='flex items-center'> {/* Adjusted */}
              <Logo/>
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden lg:hidden">
              {isMobileMenuOpen ? (
                <MdClose className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
              ) : (
                <MdMenu className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
              )}
            </div>
            {/* Mobile Menu */}
            <div ref={menuRef} className={`${isMobileMenuOpen ? 'fixed top-0 right-0 bg-black flex flex-col items-end p-4 text-white text-sm' : 'hidden'} md:hidden lg:hidden`} style={{ width: isMobileMenuOpen ? 'auto' : '0' }}>
              <MdClose className="text-white text-2xl cursor-pointer self-end mb-4" onClick={toggleMobileMenu} />
              <Link to= "/">Home</Link>
              <Link to= '/auth'>Getting Started</Link>
              <Link to= "/About">About Us</Link>
              <Link to= "/Benefits">Features & Benefits</Link>
              <Link to= "/Advantages">Advantages</Link>
              <Link to= '/faq'>FAQS</Link>
              {/* Get Started Button */}
              <div className="flex space-x-4 items-center mt-4">
                <Link to='/auth'>
                  <button className='bg-blue-700 text-white flex space-x-1 py-2 px-5 rounded-lg'>
                    <p className='font-semibold'>Get started</p>
                    <MdArrowRightAlt className='font-light ' size={25}/>
                  </button>
                </Link>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="md:hidden hidden lg:flex space-x-4 text-white text-sm">
              <Link to= "/">Home</Link>
              <Link to= '/auth'>Getting Started</Link>
              <Link to= "/About">About Us</Link>
              <Link to= "/Benefits">Features & Benefits</Link>
              <Link to= "/Advantages">Advantages</Link>
              <Link to= '/faq'>FAQS</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
