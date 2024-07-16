import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import '../../index.css';
import axios from 'axios';
import { Button, Drawer, Radio, Space } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Stocks from '../../components/assets/common/Stocks';
import Logo from '../../components/assets/common/Logo';
import MeterBar from '../../MeterBar';
import MeterBarRed from '../../MeterBar-Red';
import { FaCoins, FaPaperPlane,FaList,FaMoneyBill } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
const Dashboardx = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


//Admin Dashboard Functionalities
const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left"); 
  const [showTable, setShowTable] = useState(true);
  const [users, setUsers] = useState([]);
  const [balances, setBalances] = useState({});

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('https://livemarket-trade-server.onrender.com/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleBalanceChange = (email, newBalance) => {
    setBalances(prevBalances => ({
      ...prevBalances,
      [email]: newBalance,
    }));
  };

  const handleBalanceUpdate = async (email) => {
    try {
      const newBalance = balances[email];
      await axios.post('https://livemarket-trade-server.onrender.com/api/update-user-balance', { email, mainAccountBalance: newBalance });
      
      // Update the local state or re-fetch users after successful update
      setUsers(users.map(user => user.email === email ? { ...user, mainAccountBalance: newBalance } : user));
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };

  const [depositBalance, setDepositBalance] = useState(() => {
    const storedBalance = localStorage.getItem("depositBalance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  });
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const adminy = useSelector((state) => state.auth.admin);
  const [admin, setAdmin] = useState({
    ...adminy,
  });
  console.log({ admin });  

  
   
  const toggleTable = () => {
    // Toggle the state variable when "Clients" is clicked
    setShowTable(!showTable);
  };


  


  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col md:flex-row min-h-screen`}>
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
          <div className="text-xl md:text-xl font-bold pr-4">  
            <Link to='/'><Logo/></Link>
          </div>
          <div className="flex justify-center space-x-4">
          <Link to="/dashboard" className="bg-blue-900 text-gray-600 dark:text-gray-300 rounded px-2 py-1">  Dashboard</Link>
            <Link to="/admin-profile" className="text-gray-600 dark:text-gray-300 pr-4">Profile</Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
        <div className="w-full">
        <p className="text-white flex p-2 items-center">
  <span>Welcome!  {admin.name}</span> <span className='pl- '>Here's a summary of your account. Have fun!</span>
        </p></div>

        {/* Dashboard Cards */}
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1 cursor-pointer" onClick={toggleTable}>
              <div className="text-xl font-bold flex">User Details</div>
              <div className="text-4xl font-bold flex justify-between items-center"><span></span><span className='float-right'><FaList size={30} className="rotate-icon" /></span></div>

              <div className="text-gray-600 dark:text-gray-400">Click To Preview</div>
              <MeterBar value={40} max={100} />
            </div>
            
           <Link to="/Acct"> <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1">
              <div className="text-xl font-bold">Upload Account</div>
              <div className="text-4xl font-bold flex justify-between items-center"><span></span><span className='float-right'><FaPaperPlane size={30} className=" " /></span></div>
              <div className="text-gray-600 dark:text-gray-400">Send through your wallet and account details..</div>
              <MeterBar value={40} max={100} />
            </div></Link>
           
           <Link to="/Earnings"> <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1">
              <div className="text-xl font-bold">Update Earnings</div>
              <div className="text-4xl font-bold flex justify-between items-center"><span></span><span className='float-right'><FaMoneyBill size={30} className=" " /></span></div>
              <div className="text-gray-600 dark:text-gray-400">Upload Earnings through to Users</div>
              <MeterBarRed value={20} max={100} />
            </div></Link>
          </div>

          
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
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-400 bg-inherit text-center font-semibold">Phone</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-400 bg-inherit text-center font-semibold">Password</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-400 bg-inherit text-center font-semibold">Balance</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-400 bg-inherit text-center font-semibold">deposit</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-400 bg-inherit text-center font-semibold whitespace-nowrap">top-up</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b border-red-400 bg-inherit text-center font-semibold">Registered</th>
              </tr>
            </thead>
            {showTable && (
              <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-inherit text-white">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-300">{user.name}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-300">{user.email}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-300">{user.phone}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-300">{user.password}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-300">${user.mainAccountBalance}</td>
                  <td className='py-2 sm:py-3 px-2 sm:px-4 border-b border-blue-300 text-black'>
                  <input
                  className='p-1 w-10'
                  type="number"
                  value={balances[user.email] === undefined ? user.mainAccountBalance : balances[user.email]}
                  onChange={(e) => handleBalanceChange(user.email, parseFloat(e.target.value) || 0)}
                  placeholder="Enter new balance"
                />
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-green-300">
                    <button className='p-1 w-12 bg-green-300 shadow-md rounded-sm' onClick={() => handleBalanceUpdate(user.email)}>Fund</button>
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
            )}
          </table>
        </div>
      </div>
      </div>
      </div>
      </div>
      

         
      </div> {/*footer */}
          <div className='flex justify-center text-base text-sm pt-4'>Livemarket-Trade.com All rights reserverd.</div>
        </div>
    </div>
  );
};

export default Dashboardx;
