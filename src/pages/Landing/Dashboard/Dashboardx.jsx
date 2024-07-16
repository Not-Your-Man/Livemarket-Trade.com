import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import '../../../index.css';
import axios from 'axios';
import { Button, Drawer, Radio, Space } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Stocks from '../../../components/assets/common/Stocks';
import Logo from '../../../components/assets/common/Logo';
import MeterBar from '../../../MeterBar';
import MeterBarRed from '../../../MeterBar-Red';
import { FaCoins, FaChartPie,FaCashRegister,FaMoneyBill } from "react-icons/fa";
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

  // Dashboard Functionalities
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  // MAIN BALANCE
  const usery = useSelector((state) => state.auth.user);
  
  const [user, setUser] = useState({
    ...usery,
  });

  useEffect(() => {
    // Assume user email is stored in local storage or comes from usery
    const storedEmail = localStorage.getItem('userEmail') || usery.email;
    fetchUserDetails(storedEmail);
  }, []);

  const fetchUserDetails = async (email) => {
    try {
      const response = await axios.get('https://livemarket-trade-server.onrender.com/api/user-details', {
        params: { email }
      });
      setUser({
        ...user,
        mainAccountBalance: response.data.mainAccountBalance
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  console.log({ user });
  // MAIN-BALANCE END

  const [depositBalance, setDepositBalance] = useState(() => {
    const storedBalance = localStorage.getItem("depositBalance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  });

  // In the other page/component
  const mainWithdrawalBalance = parseFloat(localStorage.getItem('mainWithdrawalBalance')) || 0;

  const [earnings, setEarnings] = useState(null);

  useEffect(() => {
    fetchEarnings();
  },);

  const fetchEarnings = async () => {
    try {
      const response = await axios.get(`https://livemarket-trade-server.onrender.com/api/earnings`);
      setEarnings(response.data.earnings);
    } catch (error) {
      console.error('Error fetching earnings:', error);
    }
  };

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

 
 


  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col md:flex-row min-h-screen`}>
   

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <div className="flex justify-between items-center pt-4 pb-2 bg-white dark:bg-gray-800 shadow-md">
          <div className="text-4xl md:text-xl font-bold pr-4 pl-2">  
            <Link to='/'><Logo/></Link>
          </div>
          <div className="flex justify-center space-x-2">
          <Link to="/dashboard" className="bg-blue-900 text-gray-600 dark:text-gray-300 rounded px-2 py-1">  Dashboard</Link>
            <Link to="/withdraw" className="text-gray-600 dark:text-gray-300">Withdraw</Link>
            <Link to="/deposit" className="text-gray-600 dark:text-gray-300">Deposit</Link>
            <Link to="/profile" className="text-gray-600 dark:text-gray-300 pr-4">Profile</Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
        <div className="">
        <p className="text-white flex p-2 items-center">
  <span>Welcome! {user.name}</span> <span className='pl-2 whitespace-nowrap'>Here's a summary of your account. Have fun!</span>
        </p></div>

        {/* Dashboard Cards */}
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  aos-init default_cursor_cs default_cursor_land" 
                            data-aos="fade-right" 
                            data-aos-delay="200">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1">
              <div className="text-xl font-bold flex">Avaliable Balance</div>
              <div className="text-4xl font-bold flex justify-between items-center"><span>${user.mainAccountBalance}</span><span className='float-right'><BsCurrencyDollar size={40} className="rotate-icon" /></span></div>

              <div className="text-gray-600 dark:text-gray-400">Current status of your account</div>
              <MeterBar value={40} max={100} />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1">
              <div className="text-xl font-bold">Earnings/Day</div>
              <div className="text-4xl font-bold flex justify-between items-center">${earnings}<span className='float-right'>  <FaMoneyBill className="mt-4 " /></span></div>
              <div className="text-gray-600 dark:text-gray-400">Daily Rates</div>
              <MeterBar value={40} max={100} />
            </div>
           
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1">
              <div className="text-xl font-bold">Total Deposit</div>
              <div className="text-4xl font-bold justify-between items-center">${depositBalance}<span className='float-right'>  <FaCoins className="mt-4 " /></span></div>
              <div className="text-gray-600 dark:text-gray-400">Total deposited amount status</div>
              <MeterBarRed value={20} max={100} />
            </div>
          </div>

          {/* Chart */}
          <div className='flex justify-center pt-7'>
            <div className='w-full px-4 md:px-10'>
              <Stocks />
            </div>
          </div>

         
      </div> {/*footer */}
          <div className='flex justify-center text-base text-sm pt-4'>Livemarket-Trade.com All rights reserverd.</div>
        </div>
    </div>
  );
};

export default Dashboardx;
