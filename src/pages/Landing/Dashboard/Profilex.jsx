import React, { useState, useEffect } from 'react';
import { Drawer, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, LeftOutlined } from '@ant-design/icons';
import Logo from "../../../components/assets/common/Logo";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Profilex = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
   const navigate = useNavigate();
   const [userEmail, setUserEmail] = useState('');
 //  const [authenticatedUserEmail, setAuthenticatedUserEmail] = useState('');
   const [oldPassword, setOldPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [showOldPassword, setShowOldPassword] = useState(false); // Define showOldPassword state
   const [showNewPassword, setShowNewPassword] = useState(false); // Define showNewPassword state
 
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const goBack = () => {
    navigate(-1);
  };
  
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      // Make a PATCH request to the backend API endpoint to change the password
      const response = await axios.patch("https://livemarket-trade-server-main.onrender.com/api/change-password", {
        email: userEmail,
        oldPassword,
        newPassword
      });
  
      // Display success message
      message.success(response.data.message);
  
      // Clear input fields
      setOldPassword('');
      setNewPassword('');
    } catch (error) {
      // Display error message
      message.error(error.response?.data?.error || 'Failed to change password');
    }
  };
  const usery = useSelector((state) => state.auth.user);
  const [user, setUser] = useState({
    ...usery,
  });
  console.log({ user });    
  
  return (
    <div className='dark:bg-gray-900 shadow-md'>
    
    <div className="flex justify-between items-center pt-4 pb-2 bg-white dark:bg-gray-800 shadow-md">
          <div className="text-4xl md:text-xl font-bold pr-4 pl-2">  
            <Link to='/'><Logo/></Link>
          </div>
          <div className="flex justify-center space-x-2">
          <Link to="/dashboard" className=" text-gray-600 dark:text-gray-300 ">  Dashboard</Link>
            <Link to="/withdraw" className="text-gray-600 dark:text-gray-300">Withdraw</Link>
            <Link to="/deposit" className="text-gray-600 dark:text-gray-300">Deposit</Link>
            <Link to="/profile" className="bg-blue-900 text-gray-600 dark:text-gray-300 pr-4 rounded px-2 py-1">Profile</Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
   {/* PROFILE CONTENT */}
<div className="flex-1 min-h-screen dark:bg-gray-900 shadow-md">
  <div className="pt-2 px-3 dark:bg-gray-900 shadow-md">
   <button onClick={() => navigate(-1)} className=" px-10 py-30">
            <LeftOutlined />
            </button>
    <div className="flex justify-center">
     
    <form onSubmit={handleChangePassword} className="mt-6 max-w-md w-full">
  <div className="w-full max-w flex justify-center">
    <span>
      <UserOutlined style={{ fontSize: '64px' }} /> {/* Profile icon */}
    </span>
  </div>
  <div className="mb-4">
    <label className="block">Username:</label>
    <input type="text" placeholder={user.name} disabled className="w-full px-3 py-2 border rounded-md" />
  </div>
  <div className="mb-4">
    <label className="block">Email:</label>
    <input type="email" placeholder="User@Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="bg-inherit w-full px-3 py-2 border rounded-md" />
  </div>
  <div className="mb-4 relative">
    <label className="block">Old Password:</label>
    <input 
      type={showOldPassword ? "text" : "password"} 
      placeholder="Old Password" 
      value={oldPassword} 
      onChange={(e) => setOldPassword(e.target.value)} 
      className="bg-inherit w-full px-3 py-2 border rounded-md" 
    />
    <button 
      type="button" 
      className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
      onClick={() => setShowOldPassword(!showOldPassword)}
    >
      {showOldPassword ? 'Hide' : 'Show'}
    </button>
  </div>
  <div className="mb-4 relative">
    <label className="block">New Password:</label>
    <input 
      type={showNewPassword ? "text" : "password"} 
      placeholder="New Password" 
      value={newPassword} 
      onChange={(e) => setNewPassword(e.target.value)} 
      className="bg-inherit w-full px-3 py-2 border rounded-md" 
    />
    <button 
      type="button" 
      className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
      onClick={() => setShowNewPassword(!showNewPassword)}
    >
      {showNewPassword ? 'Hide' : 'Show'}
    </button>
  </div>
  <button type="submit" disabled={!userEmail || !oldPassword || !newPassword} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Change Password</button>
</form>

    </div>
  </div>
  
</div>
 {/*footer */}
 <div className='flex justify-center text-base text-sm pt-4'>Livemarket-Trade.com All rights reserverd.</div>
</div>
  );
};

export default Profilex;
