import React, { useState, useEffect } from 'react';
import { Drawer, Modal, message } from "antd";
import axios from 'axios';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import '../../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Stocks from '../../../components/assets/common/Stocks';
import Logo from '../../../components/assets/common/Logo';
import MeterBar from '../../../MeterBar';
import MeterBarRed from '../../../MeterBar-Red';
import { FaCoins, FaChartPie,FaCashRegister,FaMoneyBill } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

const Withdraw = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

//Withdrwal functionconst 
const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [method, setMethod] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [withdrawalMethod, setWithdrawalMethod] = useState('');
    const [description, setDescription] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [walletAddress, setWalletAdress] = useState('');
  const storedBalance = localStorage.getItem("mainAccountBalance");
  const [mainWithdrawalBalance, setMainWithdrawalBalance] = useState(0);

  
  
  const [mainAccountBalance, setMainAccountBalance] = useState(() => {
    const storedBalance = localStorage.getItem("mainAccountBalance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  });
  
  const [depositBalance, setDepositBalance] = useState(() => {
    const storedBalance = localStorage.getItem("depositBalance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  });
  const [withdrawalHistory, setWithdrawalHistory] = useState([]);
  
  const [totalWithdrawal, setTotalWithdrawal] = useState(() => {
    const storedWithdrawalBalance = localStorage.getItem("mainWithdrawalBalance");
    return storedWithdrawalBalance ? parseFloat(storedWithdrawalBalance) : 0;
  });
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  


    const notify = (word) => {
      toast.info(`${word}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    
  
    const handleWithdraw = () => {
      // Check if withdrawal method and amount are set
      if (!withdrawalMethod || withdrawalAmount === 0) {
        // If not set, show a message or toast to prompt the user to input withdrawal method and amount
        notify("Please select withdrawal method and enter withdrawal amount.");
        return;
      }
    
      // Logic to perform the withdrawal action
      // You can implement API calls or any other logic here
      console.log('Withdrawal action performed');
    
      // Update withdrawal history
      const newTransaction = {
        id: Math.random().toString(36).substr(2, 9), // Generate a random transaction ID
        amount: withdrawalAmount,
        time: new Date().toLocaleString(), // Get current time
      };
      const updatedHistory = [...withdrawalHistory, newTransaction];
      setWithdrawalHistory(updatedHistory);
    
      // Save withdrawal history to local storage
      localStorage.setItem('withdrawalHistory', JSON.stringify(updatedHistory));
    
      // Get the previous total withdrawal amount from local storage
      const previousTotalWithdrawal = parseFloat(localStorage.getItem('mainWithdrawalBalance')) || 0;
    
      // Calculate the new total withdrawal amount by adding the previous total and the withdrawal amount
      const totalWithdrawal = previousTotalWithdrawal + withdrawalAmount;
    
      /// Calculate the new total withdrawal amount by adding the previous total and the withdrawal amount
const newTotalWithdrawal = previousTotalWithdrawal + withdrawalAmount;

// Update total withdrawal amount
setTotalWithdrawal(newTotalWithdrawal);
localStorage.setItem('mainWithdrawalBalance', newTotalWithdrawal.toString());

    
      // Open the withdrawal receipt modal after successful withdrawal
      setIsModalOpen(true);
    
      // Generate email link for withdrawal process
      const emailLink = `mailto:payments@livemarket-trade.com?subject=Withdrawal Process`;
    
      // Open the email client with the generated email link
      window.location.href = emailLink;
    };
    
    
     // Effect to load withdrawal history from local storage when component mounts
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('withdrawalHistory'));
    if (storedHistory) {
      setWithdrawalHistory(storedHistory);
    }
  }, []);
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    /*const downloadReceipt = () => {
      // Logic to download the withdrawal receipt
      console.log('Downloading receipt');
    }*/
  
    const handleClearHistory = () => {
    // Clear withdrawal history state
  setWithdrawalHistory([]);

  // Clear withdrawal history from local storage
  localStorage.removeItem('withdrawalHistory');
    };
 

  return (
    <div className='dark:bg-gray-900 shadow-md'>
      {/* Main Content */}
      <div className="flex-1 dark:text-white">
        {/* Header */}
        <div className="flex justify-between items-center pt-4 pb-2 bg-white dark:bg-gray-800 shadow-md">
          <div className="text-4xl md:text-xl font-bold pr-4 pl-2">  
            <Link to='/'><Logo/></Link>
          </div>
          <div className="flex justify-center space-x-2">
          <Link to="/dashboard" className=" text-gray-600 dark:text-gray-300 rounded px-2 py-1">  Dashboard</Link>
            <Link to="/withdraw" className="bg-blue-900 text-gray-600 dark:text-gray-300 rounded px-2 py-1">Withdraw</Link>
            <Link to="/deposit" className="text-gray-600 dark:text-gray-300">Deposit</Link>
            <Link to="/profile" className="text-gray-600 dark:text-gray-300 pr-4">Profile</Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
    {/* withdraw content */}
    <div className="flex-1 h-screen dark:bg-gray-900 shadow-md">
        
            <div className="dark:bg-gray-900 shadow-md md:flex flex-col justify-center font-normal">
      <div className="flex flex-col items-center font-semibold text-2xl px-0 md:px-6 pt-8 h-full">
        <p className="text-lg md:text-3xl text-white text-center mt-6">
          Withdraw Funds
        </p>
        <p className="text-center font-normal text-sm px-2 md:w-1/3 text-white">
          Secure and safely withdraw money from your account
        </p>
        <section className=" w-full md:w-auto">
          <div className="h-full w-full flex font-normal flex-col items-center">
            <div className=" flex flex-col justify-center w-11/12 md:w-full mt-10">
              {/* Withdrawal form */}
              <div className="mb-6 flex flex-col justify-center">
                <label className="text-sm pb-2 font-semibold text-white">
                  Select withdrawal method:
                </label>
                <select
                  className="py-1.5 rounded border mt-1 bg-inherit border-gray-200 w-full  text-base"
                  value={withdrawalMethod}
                  onChange={(e) => setWithdrawalMethod(e.target.value)}
                >
                  <option className='text-black' value="">Select method</option>
                  <option className='text-black' value="btc">Bitcoin</option>
                  <option className='text-black' value="eth">Ethereum (ERC20)</option>
                  <option className='text-black' value='usdt'>USDT (ERC20)</option>
                  <option className='text-black bg-transparent' value='bank'>Bank </option>
                 
                </select>
              </div>
              <div className="flex flex-col w-72 md:w-80 lg:w-96 text-base">
                <span className="text-sm pb-2 font-semibold text-white">
                  Description (Optional):
                </span>
                <input
                  type="text"
                  className="py-1 px-2 text-base rounded border mt-1 mb-4 bg-inherit border-gray-200 md:w-96"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <p className="flex flex-col w-72 md:w-80 lg:w-96 text-base">
          <span className="text-sm pb-2 font-semibold text-white">Amount to withdraw:</span>
          <input
            type="number"
            className="py-1 px-2 text-base rounded border mt-1 mb-4 bg-inherit border-gray-200 md:w-96"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(parseFloat(e.target.value))}
          />
        </p>
        
        <button 
  onClick={handleWithdraw} 
  className="mt-3 bg-red-500 text-white rounded-md text-xs"
  style={{ padding: '4px 8px', fontSize: '12px' }}
>
  Continue to withdraw
</button>





               {/* Withdrawal receipt modal */}
            {/* Withdrawal history */}
            <div className="p-2">
              <h2 className="text-sm font-semibold mb-2">Transaction History</h2>
              {/* Transaction history table */}
              <div className="overflow-auto max-h-48 ">
                <table className="border-collapse w-full text-xs ">
                  <thead className=''>
                    <tr className=''>
                      <th className="border border-gray-300 bg-blue-500 px-2 py-1 rounded-tl-md">Transaction ID</th>
                      <th className="border border-gray-300 bg-blue-500 px-2 py-1">Amount</th>
                      <th className="border border-gray-300 bg-blue-500 px-2 py-1 rounded-tr-md">Time of withdrawal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Transaction history items */}
                    {withdrawalHistory.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="border border-transparent px-2 py-1 whitespace-normal">{transaction.id}</td>
                        <td className="border border-transparent px-2 py-1 whitespace-normal">{transaction.amount}</td>
                        <td className="border border-transparent px-2 py-1 whitespace-normal">{transaction.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Clear history button */}
              <button onClick={handleClearHistory} className="mt-2 bg-red-500 text-white px-1 py-0.5 rounded-md text-xs">Clear</button>
            </div>
            </div>
          </div>
        </section>
      </div>
     
          </div>
        </div>
      </div>
 </div>

  );
};

export default Withdraw;
