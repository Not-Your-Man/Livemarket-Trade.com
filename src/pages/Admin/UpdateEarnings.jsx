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
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://livemarket-trade-server.onrender.com/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleEarningsChange = (event) => {
    setEarnings(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://livemarket-trade-server.onrender.com/api/update-earnings", {
        userId: selectedUser,
       earnings: earnings,    
      });
      setSuccessMessage('Earnings updated successful');

    } catch (error) {
      console.error("Error updating earnings:", error);
      setErrorMessage('Error: Earnings update failed');
      // Clear success message
      setSuccessMessage('');
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
<div className="flex-1 min-h-screen dark:bg-gray-900 shadow-md">
  <div className="pt-2 px-3 dark:bg-gray-900 shadow-md">
   
    <div className="flex justify-center items-center">
     
    
        <form onSubmit={handleSubmit} className="flex justify-center flex-col mt-28">
          <p className="text-2xl font-semibold mb-5">Update Earnings</p>
          <label htmlFor="user" className="mb-2">Select User:</label>
          <select
            id="user"
            value={selectedUser}
            onChange={handleUserChange}
            className="p-2 border rounded-md mb-2"
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <label htmlFor="earnings" className="mb-2">Earnings:</label>
          <input
            type="number"
            id="earnings"
            value={earnings}
            onChange={handleEarningsChange}
            className="p-2 border rounded-md mb-2"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
         {/* Display success message */}
         {successMessage && <div className="text-green-500">{successMessage}</div>}
        {/* Display error message */}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

    </div>
  </div>
  
</div>
 {/*footer */}
 <div className='flex justify-center text-base text-sm pt-4'>Livemarket-Trade.com All rights reserverd.</div>
</div>
        
    
  );
};

export default UpdateEarnings;
