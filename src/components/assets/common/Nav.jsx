import React,{ useState, useEffect } from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import Logo from './Logo';


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
            <div className=''>
              <Logo/>
            </div>
            <div className="md:hidden hidden lg:flex space-x-4 text-white text-sm">
            <Link to= "/">Home</Link>
              <Link to= '/auth'>Getting-started</Link>
              <Link to= "/About">About-us</Link>
              <Link to= "/Benefits">Features & Benefits</Link>
              <Link to= "/Advantages"> Advantages</Link>
              <Link to= '/faq'>FAQS</Link>
            </div>
            <div className="flex space-x-4 items-center">
              <Link to='/auth'>
              <button className='bg-blue-700 text-white flex space-x-1 py-2 px-5 rounded-lg'>
                <p className='font-semibold'>Get started</p>
                <MdArrowRightAlt className='font-light ' size={25}/>
              </button>
              </Link>
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