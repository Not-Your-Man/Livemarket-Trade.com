import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../components/assets/common/Logo";
import { UserOutlined, LeftOutlined } from '@ant-design/icons';

const UpdateEarnings = () => {


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [earnings, setEarnings] = useState(0);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("https://livemarket-trade-server-main.onrender.com/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  

  const handleEarningsChange = (email, newEarnings) => {
    setEarnings(prevEarnings => ({
      ...prevEarnings,
      [email]: newEarnings,
    }));
  };

  const handleEarnings = async (email) => {
    try {
      const newEarnings = earnings[email];
      await axios.post("https://livemarket-trade-server-main.onrender.com/api/update-Earnings", { email, Earnings: newEarnings });
      
      // Update the local state or re-fetch users after successful update
      setUsers(users.map(user => user.email === email ? { ...user, mainAccountBalance: newEarnings } : user));
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };


    // Function to handle navigation back
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
      };

  return (
    <div className='dark:bg-gray-900 shadow-md'>
    
    <div className="flex justify-between items-center p-4 dark:bg-gray-800 shadow-md">
          <div className="text-xl md:text-xl font-bold pr-4">  
          <Link to='/'><Logo/></Link>
          </div>
          <div className="flex justify-center space-x-4">
          <Link to="/admin" className="text-gray-600 dark:text-gray-300">Dashboard</Link>
            <Link to="//admin-profile" className=" text-gray-600 dark:text-gray-300 rounded px-2 py-1">Profile</Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
   {/* PROFILE CONTENT */}

     
    
        {/* Main-content */}
  <p className=" mt-20 py-2 flex justify-center text-white uppercase text-center font-bold">
  User Details
</p>
<div className="px-2 sm:px-6 pb-8 flex justify-center">
  <div className="w-full max-w-full sm:max-w-4xl">
    {/* Table component */}
    <div className="flex-1 overflow-y-auto">
      <div className="relative overflow-hidden shadow-md rounded-lg">
        {/* Card-like styles */}
        {/* Render the table based on the state variable */}
        <div className="overflow-x-auto">
          <table className="w-full text-gray-800 border-collapse bg-inherit h-full">
            <thead className=" text-white">
              <tr>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-400 bg-inherit text-center font-semibold">Name</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-400 bg-inherit text-center font-semibold">Email</th>
               
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-400 bg-inherit text-center font-semibold">Earnings</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-400 bg-inherit text-center font-semibold whitespace-nowrap">Top-up</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-400 bg-inherit text-center font-semibold whitespace-nowrap">Fund</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-red-400 bg-inherit text-center font-semibold">Registered</th>
              </tr>
            </thead>
           
              <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-inherit text-white">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-300">{user.name}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-300">{user.email}</td>
                 
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-300">${user.Earnings}</td>
                
                  <td className='py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-300 text-black'>
                  <input
                  className='p-1 w-10'
                  type="number"
                  value={earnings[user.email] === undefined ? user.Earnings : earnings[user.email]}
                  onChange={(e) => handleEarnings(user.email, parseFloat(e.target.value) || 0)}
                  placeholder="Enter new earnings"
                />
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-300">
                    <button className='p-1 w-12 bg-green-300 shadow-md rounded-sm' onClick={() => handleEarnings(user.email)}>Fund</button>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-red-300 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        user.status === "Progress"
                          ? "bg-green-500"
                          : user.status === "Open"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
      </div>
         {/* Display success message */}
         {successMessage && <div className="text-green-500">{successMessage}</div>}
        {/* Display error message */}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

 {/*footer */}
 <div className='flex justify-center text-base text-sm pt-4'>Livemarket-Trade.com All rights reserverd.</div>
    </div>
     
    
  );
};

export default UpdateEarnings;
