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
import { useDispatch, useSelector } from 'react-redux';
import Stocks from '../../../components/assets/common/Stocks';
import Logo from '../../../components/assets/common/Logo';
import MeterBar from '../../../MeterBar';
import MeterBarRed from '../../../MeterBar-Red';
import { FaCoins, FaChartPie, FaCashRegister, FaMoneyBill } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
//import { addTransaction } from "./transactionReducer";

const Deposit = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [placement, setPlacement] = useState("left");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [depositHistory, setDepositHistory] = useState([]);
  const [mainAccountBalance, setMainAccountBalance] = useState(0);
  const [depositBalance, setDepositBalance] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("btc");
  const [amt, setAmt] = useState('');
  const [transactions, setTransactions] = useState([]);


  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user.email);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const onAmtChange = (e) => {
    setAmt(e.target.value);
  };

  


  const handleDeposit = async () => {
    setIsModalOpen(false);
    setShowSuccessMessage(false);
    const amount = parseFloat(amt);
  
    if (isNaN(amount) || amount <= 0) {
      message.error("Invalid amount. Please enter a valid deposit amount.");
      return;
    }
  
    if (!email) {
      message.error("User email is not available. Please log in.");
      return;
    }
  
    const axiosInstance = axios.create({
      timeout: 5000,
    });
  
    try {
      console.log('Sending request to backend with:', { email, deposits: amount });
  
      const response = await axiosInstance.post("https://livemarket-trade-server-main.onrender.com/api/deposit", { email, amount: amount }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const depositAction = (amount) => ({
        id: Math.random().toString(36).substr(2, 9),
        amount: amount,
        time: new Date().toLocaleString()
      });
      const transactionDetails = depositAction(amount);
  
      setTransactions([...transactions, transactionDetails]);
  
      setShowSuccessMessage(true);
      message.success("Payment Successful");
    } catch (error) {
      console.error('Error storing deposit in backend:', error);
      message.error("Failed to deposit. Please try again.");
    }
  };
  
  

  const handleClearHistory = () => {
    setTransactions([]);
  };

  const [address, setAddress] = useState({
    btc: 'Bitcoin Address...',
    eth: 'Ethereum Address...',
    bank: 'Bank Account...',
    USDT: 'USDT Address...',
  });

  useEffect(() => {
    const fetchDepositDetails = async () => {
      try {
        const response = await axios.get("https://livemarket-trade-server-main.onrender.com/api/deposit-details");
        const depositDetails = response.data;
        setAddress({
          btc: depositDetails.btcWallet || 'Bitcoin Address...',
          eth: depositDetails.ethWallet || 'Ethereum Address...',
          bank: depositDetails.bankAccount || 'Bank Account...',
          USDT: depositDetails.USDT || 'USDT Address...',
        });
      } catch (error) {
        console.error('Error fetching deposit details:', error);
      }
    };

    fetchDepositDetails();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    if (!amt) {
      return alert("Enter Amount");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [openBank, setOpenBank] = useState(false);
  const showBank = () => {
    setOpenBank(true);
  };
  const handleDone = () => {
    setOpenBank(false);
  };
  const handleClose = () => {
    setOpenBank(false);
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
          <Link to="/dashboard" className=" text-gray-600 dark:text-gray-300 ">  Dashboard</Link>
            <Link to="/withdraw" className="text-gray-600 dark:text-gray-300">Withdraw</Link>
            <Link to="/deposit" className="bg-blue-900 text-gray-600 dark:text-gray-300 rounded px-2 py-1">Deposit</Link>
            <Link to="/profile" className="text-gray-600 dark:text-gray-300 pr-4">Profile</Link>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
 {/* Deposit Content */}
 <div className="flex-1 dark:bg-gray-900 shadow-md ">
          
    <div class="flex flex-col items-center font-semibold text-2xl px-6 pt-8 h-full">
                <p class="rounded-full mt-4 pb-0 mb-0 w-16 h-16 flex justify-center items-center bg-[#33b5e5]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class=" text-white bg-clip-tex rounded-full"
                    height="34"
                    width="34"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                    <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z"></path>
                  </svg>
                </p>
                <p class="text-lg md:text-xl text-center mt-6 text-white">Deposit Funds</p>
                <p class="text-center font-normal md:font-medium text-sm px-2 md:w-1/3 text-slate-20">
                  Secure and safely deposit money into your account
                </p>
                <p class="flex flex-col w-72 mb-2 md:w-80 lg:w-96 font-normal">
                  <span class="text-sm pb-2 text-white">
                    Amount to Deposit
                    <span class="text-red-500">*</span>
                  </span>
                  <input
                    placeholder="0.00"
                    type="number"
                    onChange={onAmtChange}
                    className=" bg-inherit border font-normal text-base border-gray-300 py- px-2 md:p-2 rounded shadow-sm placeholder:text-sm md:placeholder:text-base"
                  />
                  <p className="text-xs text-red-600 tracking-wide pt-1 font-medium">
                    Min: $50
                  </p>
                </p>
                <select
                  className="bg-inherit py-1.5 rounded w-72 md:w-80 font-normal mb-4 border mt-1 border-gray-200  text-base"
                  onChange={handlePaymentMethodChange}
                  value={selectedPaymentMethod}
                >
                  <option className='text-black' value="btc">Bitcoin</option>
                  <option className='text-black' value="eth">Ethereum</option>
                  <option className='text-black' value="bank">Bank</option>
                  <option className='text-black' value="USDT">USDT</option>
                </select>
                <p className='flex flex-col w-72 md:w-80 lg:w-96 text-base mb-3'>
                  <span className="text-sm pb-2 font-normal text-white">Description</span>
                  <textarea
                    placeholder="Optional"
                    className="bg-inherit border pt-2 text-white text-base border-gray-300 py- px-2 md:p-2 rounded shadow-sm font-normal placeholder:text-sm md:placeholder:text-base"
                  ></textarea>
                </p>
                <button
                  onClick={showModal}
                  className="px-3 py-1.5 w-72 md:w-80 lg:w-96 md:py-2.5 text-sm bg-blue-500 text-white font-medium rounded uppercase mt-3 md:mt-0"
                >
                  Continue to Deposit
                </button>
              {/* Transaction history */}
              <div className="p-2">
  <h2 className="text-sm font-semibold mb-2">Transaction History</h2>
  {/* Transaction history table */}
  <div className="overflow-auto max-h-48">
    <table className="border-collapse w-full text-xs">
      <thead>
        <tr>
          <th className="bg-inherit border border-gray-300 bg-gray-200 px-2 py-1 rounded-tl-md">Transaction ID</th>
          <th className="bg-inherit border border-gray-300 bg-gray-200 px-2 py-1">Amount</th>
          <th className="bg-inherit border border-gray-300 bg-gray-200 px-2 py-1 rounded-tr-md">Time Deposited</th>
        </tr>
      </thead>
      <tbody>
        {/* Transaction history items */}
        {transactions.map((transaction) => (
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


                <p class="font-medium text-red-600 text-xs md:text-base"></p>
                <Modal
                  title="Complete Deposit"
                  open={isModalOpen}
                  //onOk={handleOk}
                  onCancel={handleCancel}
                  okButtonProps={{ className: 'bg-red-500' }} // Add this line
                >
                  <div className="border border-gray-100 w-full"></div>
                  <div className="text-black">
                    <section className="border mt-5 border-slate-300 px-1 md:px-4 mb-6 font-normal default_cursor_cs">
                      <div class="flex justify-between items-center border-b py-2 border-slate-300 text-sm font-normal default_cursor_cs">
                     { /**<span>Payment method</span>
                        <select
                  class="py-1.5 rounded w-72 md:w-80 font-normal mb-4 border mt-1 border-gray-200  text-base"
                >
                  <span>{selectedPaymentMethod === 'btc' ? 'Bitcoin Address...' : selectedPaymentMethod}</span>
                  <span>{selectedPaymentMethod === 'eth' ? 'Eth Address...' : selectedPaymentMethod}</span>
                  <span>{selectedPaymentMethod === 'bank' ? 'Bank Account...' : selectedPaymentMethod}</span>
                  <span>{selectedPaymentMethod === 'usdc' ? 'USDT Address...' : selectedPaymentMethod}</span>
                </select>**/}
                        <span class="flex uppercase text-sm font-normal default_cursor_cs">
                          {" "}
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class=" text-slate-800 rounded-full mr-2"
                            height="17"
                            width="17"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                            <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z"></path>
                          </svg>
                          Barcode
                        </span>
                      </div>
                      <div class="flex justify-between items-center border-b py-2 border-slate-300 text-sm default_cursor_cs">
                        <span class="flex text-sm">{address[selectedPaymentMethod]}</span>
                        <CopyToClipboard
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="mt-1 ml-4 text-green-500 hover:text-green-600 bg-pr default_cursor_cs"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                            <path d="M6 12h6v2H6zm0 4h6v2H6z"></path>
                          </svg>
                        </CopyToClipboard>
                      </div>
                      <div class="flex justify-between items-center border-b py-2 border-slate-300 text-sm default_cursor_cs">
                        <span>You will send</span>
                        <span class="uppercase font-medium default_cursor_cs">
                          ${amt}
                        </span>
                      </div>
                      <div class="mb-3 pt-3 text-sm default_cursor_cs">
  *Click the copy icon and proceed to make deposit.
  before clicking <span class="text-red-500">Confirm Pay</span>
</div>

                    </section>
                    <button
                      class="px-3 mt-8 pt-1.5 pb-1.5 w-full md:py-2.5 text-xs bg-yellow-500 text-white font-medium rounded uppercase md:mt-0 default_pointer_cs"
                      onClick={handleDeposit}
                    >
                      Confirm Pay
                    </button>
                  </div>
                </Modal>
              </div>  
              </div>
      
        </div>
      </div>
  
  );
};

export default Deposit;
