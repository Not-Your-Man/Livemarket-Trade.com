import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../components/assets/common/Logo";

function AccountDetails({ onDeposit }) {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  // Inside your functional component
  AccountDetails.propTypes = {
    onDeposit: PropTypes.func.isRequired,
  };

  const navigate = useNavigate(); // Initialize useHistory hook
  const [btcWallet, setBtcWallet] = useState('');
  const [ethWallet, setEthWallet] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [USDT, setUSDT] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the server
      const response = await axios.post('https://livemarket-trade-server.onrender.com/api/accounts', {
        btcWallet,
        ethWallet,
        bankAccount,
        USDT,
      });
      // Call the onDeposit function passed as a prop
      onDeposit(response.data);
      // Display success message
      setSuccessMessage('Account sent successful');
      // Clear input fields
      setBtcWallet('');
      setEthWallet('');
      setBankAccount('');
      setUSDT('');
      // Clear error message
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
      // Display error message
      setErrorMessage('Error: Account sent failed');
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
            <Link to="/dmin-profile" className=" text-gray-600 dark:text-gray-300 rounded px-2 py-1">Profile</Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
   {/* PROFILE CONTENT */}
   <div className="flex flex-col items-center justify-center pt-[-20]">
   <form className='mt-20' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="btcWallet" className="block text-sm font-medium text-gray-700">
              BTC Wallet
            </label>
            <input
              type="text"
              id="btcWallet"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={btcWallet}
              onChange={(e) => setBtcWallet(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ethWallet" className="block text-sm font-medium text-gray-700">
              ETH Wallet
            </label>
            <input
              type="text"
              id="ethWallet"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={ethWallet}
              onChange={(e) => setEthWallet(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bankAccount" className="block text-sm font-medium text-gray-700">
              Bank Account
            </label>
            <input
              type="text"
              id="bankAccount"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="USDT" className="block text-sm font-medium text-gray-700">
              USDT
            </label>
            <input
              type="text"
              id="USDT"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={USDT}
              onChange={(e) => setUSDT(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
        {/* Display success message */}
        {successMessage && <div className="text-green-500">{successMessage}</div>}
        {/* Display error message */}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
 {/*footer */}
 <div className='flex justify-center text-base text-sm mt-40'>Livemarket-Trade.com All rights reserverd.</div>
</div></div>
       
      
  );
}

export default AccountDetails;
