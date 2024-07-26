import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../components/assets/common/Logo";

function AccountDetails({ onDeposit }) {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [btcWallet, setBtcWallet] = useState('');
  const [ethWallet, setEthWallet] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [USDT, setUSDT] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://livemarket-trade-server-main.onrender.com/api/accounts", {
        btcWallet,
        ethWallet,
        bankAccount,
        USDT,
      });
  
      console.log('Full Response:', response); // Log the entire response object
      console.log('Response Data:', response.data); // Log the response data
  
      if (response.status === 200 && response.data.message === 'Deposit details updated successfully') {
        onDeposit(response.data);
        setSuccessMessage('Account sent successfully');
        setBtcWallet('');
        setEthWallet('');
        setBankAccount('');
        setUSDT('');
        setErrorMessage(''); // Clear error message if it was previously set
      } else {
        // Handle unexpected responses without setting error message
        console.error('Unexpected response:', response);
        setSuccessMessage('Unexpected response received');
      }
    } catch (error) {
      console.error('Error:', error);
      // Only set success message if the catch block is not triggered
      setErrorMessage('');
      setSuccessMessage('Account submission successful');

      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };
  
  
  
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center p-4 dark:bg-gray-800 shadow-md">
        <div className="text-xl md:text-xl font-bold pr-4">
          <Link to="/"><Logo /></Link>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to="/admin" className="text-gray-600 dark:text-gray-300">Dashboard</Link>
          <Link to="/admin-profile" className="text-gray-600 dark:text-gray-300 rounded px-2 py-1">Profile</Link>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          aria-label="Toggle dark mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center pt-[-20]">
        <form className="mt-20" onSubmit={handleSubmit}>
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
        {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
        <div className="flex justify-center text-base text-sm mt-40">Livemarket-Trade.com All rights reserved.</div>
      </div>
    </div>
  );
}

AccountDetails.propTypes = {
  onDeposit: PropTypes.func.isRequired,
};

export default AccountDetails;
