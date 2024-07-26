// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import Logo from "../../components/assets/common/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Status = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Fetch user details from the backend when the component mounts
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Make a GET request to the backend endpoint to fetch user details
      const response = await fetch("https://livemarket-trade-server-main.onrender.com/api/users");
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      // Update the state with the fetched user details
      setUsers(data);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  const handleUserSelect = (event) => {
    const userId = event.target.value;
    const user = users.find(user => user._id === userId); // Adjusted to match typical MongoDB object id
    setSelectedUser(user);
    setStatus(user.status);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`https://livemarket-trade-server-main.onrender.com/api/users/${selectedUser._id}/updateStatus`, { status })
      .then(response => {
        alert('Status updated successfully!');
      })
      .catch(error => {
        console.error("There was an error updating the status!", error);
      });
  };

  return (
    <div className="min-h-screen w-full dark:bg-gray-900 shadow-md p-4 flex flex-col">
      <div className="flex justify-between items-center p-4 dark:bg-gray-800 shadow-md">
        <div className="text-xl md:text-xl font-bold pr-4">
        <Link to='/'><Logo/></Link>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to="/admin" className="text-gray-600 dark:text-gray-300">Dashboard</Link>
          <Link to="/admin-profile" className=" text-gray-600 dark:text-gray-300 rounded px-2 py-1">Profile</Link>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center pb-48 px-[-6]">
        <h1 className="text-2xl font-semibold mb-4 text-white">User Status</h1>
        <form className="space-y-4" >
          <label className="block text-white">
            <select className="mt-1 p-2 border rounded bg-inherit" onChange={handleUserSelect} value={selectedUser ? selectedUser._id : ''}>
              <option value="" disabled className='bg-gray-900'> Select </option>
              {users.map(user => (
                <option className='bg-gray-900' key={user._id} value={user._id}>{user.name}</option>
              ))}
            </select>
          </label>
          {selectedUser && (
            <>
              <label className="block text-white ">
                <select className="mt-1 p-2 border rounded bg-gray-900" value={status} onChange={handleStatusChange}>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="declined">Declined</option>
                </select>
              </label>
              <button
              onSubmit={handleSubmit}
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update Status
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Status;
