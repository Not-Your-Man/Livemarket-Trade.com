import React, {useState} from 'react';
import { GiPhone } from 'react-icons/gi';
import Logo from '../../components/assets/common/Logo';

const Auth = () => {
    const tabs = ['Sign Up', 'Log In']; // Replace with your tab titles
    const [activeTab, setActiveTab] = useState(0);
  
    const changeTab = (index) => {
      setActiveTab(index);
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const { name, email, phone, password } = formData;
    
      const isFormFilled = name !== '' && email !== '' && password !== '' && phone !== '';

    const loginForm = (
      <div className='py-10 font-Poppins text-white/80'>
      <div className=''>
          <h1 className='text-xl'><span className='text-[#0052FF]'>Sign-In</span> to your account</h1>
          <p className="mr-10 font-normal text-gray-200 py-5">
            Continue where you left off by logging in, we keep 
          <span className=" text-[#0052FF] font-bold"> simple </span>
           of your every progress.
          </p>
      </div>
       <form className=''>
          <div className='py-5 space-y-10'>
              <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-red-00 font-bold text-sm mb-2 capitalize" 
                  for="name">Email:</label>
                  <input 
                  className="flex border border-input file:border-0 file:bg-transparent 
                  file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-[#0052FF] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 
                  py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all capitalize rounded-lg text-sm" 
                  id="email" 
                  type="email" 
                  name="email"  
                  value={email}
                  onChange={handleInputChange}/>
              </div>
              <div>
                  <label 
                  className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-red-00 font-bold text-sm mb-2 capitalize" 
                  for="name">Password:</label>
                  <input 
                  className="flex lowercase border border-input ring-offset-background file:border-0 file:bg-transparent 
                  file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-[#0052FF] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 
                  py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm" 
                  id="password" 
                  type="password" 
                  name="password"
                  value={password}
                  onChange={handleInputChange}/>
              </div>
          </div>
          <div className="flex justify-between">
              <button 
              className="rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none 
              focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
              disabled:opacity-50 hover:bg-[#0051ff67] px-4 py-2 w-full flex items-center justify-center bg-[#0052FF] text-white h-12 font-bold" 
              type="button"
              >
                <div className="py-2 flex items-center justify-center">Log In</div>
              </button>
          </div>
      </form>
  </div>
      );
    
      const signUpForm = (
        <div className='py-10 font-Poppins text-white/80'>
          
            <div className=''>
                <h1 className='text-xl'><span className='text-[#0052FF]'>Create</span> a new account</h1>
                <p className="mr-10 font-normal text-gray-200 py-5">Create a new 
                    <span className="text-[#0052FF] font-bold"> account</span> to enjoy immense benefits and financial freedom, it's easy, it's 
                    <span className=" text-[#0052FF] font-bold"> simple</span>
                </p>
            </div>
             <form className='border-t-4 border-gray-500 border-opacity-5'>
                <div className='py-5 space-y-10'>
                    <div>
                        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-red-00 font-bold text-sm mb-2 capitalize" 
                        for="name">Legal Full Name</label>
                        <input 
                        className="flex border border-input ring-offset-background file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                        focus-visible:ring-[#0052FF] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 
                        py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all capitalize rounded-lg text-sm" 
                        id="name" 
                        placeholder="John Doe" 
                        type="text" 
                        name="name"  
                        value={name}
                        onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label 
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-red-00 font-bold text-sm mb-2 capitalize" 
                        for="name">Email Address</label>
                        <input 
                        className="flex lowercase border border-input ring-offset-background file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                        focus-visible:ring-[#0052FF] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 
                        py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm" 
                        id="name" 
                        placeholder="johndoe@example.com" 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label 
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-red-00 font-bold text-sm mb-2 capitalize" 
                        for="name">Phone</label>
                        <input 
                        className="flex lowercase border border-input ring-offset-background file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                        focus-visible:ring-[#0052FF] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 
                        py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm" 
                        id="phone" 
                        placeholder="999-999-999" 
                        type="text" 
                        name="phone"
                        value={phone}
                        onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label 
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-red-00 font-bold text-sm mb-2 capitalize" 
                        for="name">Password</label>
                        <input 
                        className="flex lowercase border border-input ring-offset-background file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                        focus-visible:ring-[#0052FF] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 
                        py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm" 
                        id="password" 
                        placeholder='xxxxx'
                        type="password" 
                        name="password"
                        value={password}
                        onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button 
                    className="rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 hover:bg-[#0051ff67] px-4 py-2 w-full flex items-center justify-center bg-[#0052FF] text-white h-12 font-bold" 
                    type="button"
                    disabled={!isFormFilled}>
                        <div className="py-2 flex items-center justify-center">Proceed</div>
                    </button>
                </div>
            </form>
        </div>
       
      );
    
      const tabContents = [signUpForm, loginForm];

  return (
    <div className='w-full h-[130vh] pt-2d flex justify-center items-center bg-[#0a0a0a] text-white default_cursor_cs default_cursor_land'>
        <div className="hidden auth-container w-[80vw] md:w-[40vw] p-4 rounded-md bg-[#111] border-white/10 border">
            <div className="cont w-full default_cursor_cs default_cursor_land">
                <div className="icon-cont flex justify-center items-center w-full default_cursor_cs default_cursor_land">
                    <div className="cont rounded-full p-5 bg-[#222] text-white/80 default_cursor_cs default_cursor_land">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                            <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 
                            0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 
                            0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 
                            0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd">
                            </path>
                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 
                            0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 
                            0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className="text-cont mt-5 mb-4 rounded-md /p-3 text-white/90 /bg-[#222]">
                    <div className="text text- font-bold text-center default_cursor_cs default_cursor_land">Login or Create an account with us</div>
                </div>
                <div className="form-cont flex items-center justify-center"> 
                    <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed" className="w-full px-2">
                        <div className="w-full">
                            <div className="btn px-4 py-3 bg-[#0052FF] hover:bg-[#0052FF] text-white font-semibold text-sm items-center justify-center rounded-xl flex default_pointer_cs default_pointer_land">
                                <p className="default_pointer_cs default_pointer_land">Proceed Authentication</p>
                            </div>
                        </div>
                    </button>
                </div>
                <a href="/"> 
                    <div className=" w-full p-2 mt-1 default_pointer_cs default_pointer_land">
                        <div className="btn btn-outline px-4 py-3 w-full flex items-center justify-center text-center bg-[#222] text-white/80 hover:text-black 
                        font-semibold text-sm rounded-xl default_pointer_cs default_pointer_land">
                            <p>Back to home</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="flex flex-col md:w-[40%] md:px-0 px-5 font-Poppins">
          <div className='pb-5 flex justify-center'>
            <Logo/>
          </div>
      <div className="h-10 items-center justify-center rounded-md p-1 text-muted-foreground w-full grid grid-cols-2 font-bold bg-[#111]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => changeTab(index)}
            className={`${
                activeTab === index
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-500'
              } focus:outline-none mr-4 md:xpx-20 py-1 rounded-lg`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {tabContents.map((tabContent, index) => (
          <div
            key={index}
            className={`${activeTab !== index ? 'hidden' : 'block'}`}
          >
            {tabContent}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Auth;