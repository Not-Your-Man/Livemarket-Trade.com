import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; 

function AccountDetails({ onDeposit }) {
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
      const response = await axios.post('https://aucitydbserver.onrender.com/api/accounts', {
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
    
    <div className="flex justify-center items-center h-screen">
      
      <div className="bg-white rounded-lg shadow-md p-6 text-black w-96">
      <button onClick={handleBack} className="absolute top-4 left-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <form onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
}

export default AccountDetails;
