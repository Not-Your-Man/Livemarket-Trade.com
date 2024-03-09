import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Drawer, Modal, message } from "antd";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../../components/assets/common/Logo";

const Deposit = () => {
  const [amt, setAmt] = useState("");
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State variable for success message
 const [depositHistory, setDepositHistory] = useState([]);
 const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("btc");
 // State to manage transaction history
 const [transactions, setTransactions] = useState(() => {
  const storedTransactions = localStorage.getItem("transactions");
  return storedTransactions ? JSON.parse(storedTransactions) : [];
});

 const handleDeposit = () => {
  setIsModalOpen(false);
  setShowSuccessMessage(true);
  message.success("Payment Successful");
  const amount = parseFloat(amt);
  setMainAccountBalance(prevBalance => prevBalance + amount);
  setDepositBalance(prevBalance => prevBalance + amount);

  const transactionDetails = depositAction(amount); // Pass the deposited amount
  setTransactions([...transactions, transactionDetails]);
};

const depositAction = (amount) => { // Receive the deposited amount as a parameter
  const transactionDetails = {
    id: Math.random().toString(36).substr(2, 9),
    amount: amount, // Use the deposited amount
    time: new Date().toLocaleString()
  };
  return transactionDetails;
};

const handleClearHistory = () => {
  localStorage.removeItem("transactions"); // Remove transaction history from local storage
  setTransactions([]); // Clear transaction history in state
};
  
const [address, setAddress] = useState({
  btc: 'Bitcoin Address...',
  eth: 'Ethereum Address...',
  bank: 'Bank Account...',
  USDT: 'USDT Address...',
});
// In the other page/component
const mainWithdrawalBalance = parseFloat(localStorage.getItem('mainWithdrawalBalance')) || 0;

useEffect(() => {
  // Fetch initial deposit details from the server
  const fetchDepositDetails = async () => {
    try {
      const response = await axios.get('https://aucitydbserver.onrender.com/api/deposit-details');
      const depositDetails = response.data;
      // Update the address state with the fetched deposit details
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

 const [mainAccountBalance, setMainAccountBalance] = useState(() => {
  const storedBalance = localStorage.getItem("mainAccountBalance");
  return storedBalance ? parseFloat(storedBalance) : 0;
});

const [depositBalance, setDepositBalance] = useState(() => {
  const storedBalance = localStorage.getItem("depositBalance");
  return storedBalance ? parseFloat(storedBalance) : 0;
});

    const [storedBalance, setStoredBalance] = useState(() => {
  const storedBalance = localStorage.getItem("mainAccountBalance");
  return storedBalance ? parseFloat(storedBalance) : 0;
});

    useEffect(() => {
      // Save the main account balance to localStorage whenever it changes
      localStorage.setItem("mainAccountBalance", mainAccountBalance.toString());
    }, [mainAccountBalance]);
  
    useEffect(() => {
      // Save the deposit balance to localStorage whenever it changes
      localStorage.setItem("depositBalance", depositBalance.toString());
      localStorage.setItem("transactions", JSON.stringify(transactions)); // Save transaction history to local storage
    }, [depositBalance, transactions]);

   // Get the main account balance from localStorage or set it to 0 if it doesn't exist

   
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onAmtChange = (e) => {
    setAmt(e.target.value);
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
   const handleOk = () => {
  
    setIsModalOpen(false);
    setShowSuccessMessage(true); // Show success message when payment is successful
    message.success("Payment Successful"); // Display success message using antd message component
    const amount = parseFloat(amt);
    setMainAccountBalance(prevBalance => prevBalance + amount); // Update main account balance
    setDepositBalance(prevBalance => prevBalance + amount); // Update deposit balance
    const transactionDetails = depositAction(amount); // Pass the deposited amount
  setTransactions([...transactions, transactionDetails]); 
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
    <div>
      {/* Drawer */}
      <Drawer
        placement={placement}
        closable={false}
        open={open}
        key={placement}
      >
        <div className="w-[93%] pt-6 pl-2.5 default_cursor_cs">
          <p className="flex justify-between py-2">
          <Link to="/" className="flex items-center">
            <Logo/>
          </Link>
            <svg
              onClick={onClose}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              class="default_cursor_cs"
            >
              <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
            </svg>
          </p>
        </div>
        <div class="flex items-center justify-between border-y-2 my-2 py-6 px-4">
        <Link to="/Profile">
          <p class="rounded-full w-8 h-8 flex justify-center items-center bg-sky-600 mr-6">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class=" text-gray-300 bg-clip-text rounded-full"
              height="13"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              </g>
            </svg>
          </p></Link>
          <p class="flex flex-col flex-1 text-sm">
            <span class="font-semibold"></span>
            <span class="text-slate-600 text-xs"></span>
          </p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M7 10l5 5 5-5H7z"></path>
          </svg>
        </div>
        <div className="w-11/12 font-medium  text-slate-700 text-sm">
          <div class="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider">
            Menu
          </div>
          <ul>
            <Link
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12  active"
              to="/dashboard"
              style={{ color: "rgb(225, 29, 72)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                class="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/deposit"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                </g>
              </svg>
              <span>Deposit</span>
            </Link>
            <Link
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/withdraw"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                </g>
              </svg>
              <span>Withdraw</span>
            </Link>
            <Link
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/Profile"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
              <span>Account Setting</span>
            </Link>
            <Link to='/auth'>
            <p
              class="flex text-[#526484] hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
              </svg>
              <span className="text-[#526484]">Sign Out</span>
            </p>
            </Link>
          </ul>
        </div>
      </Drawer>

      {/* Content */}
      <div className="px-0 lg:px-0 w-full">
        <div className="md:flex relative">
          {/* left section */}
          <section
            className="hidden md:relative z-10 top-0 left-0 bottom-0 w-full bg-black md:flex md:flex-col md:items-center md:w-4/12 lg:w-1/5 bg-red-5 shadow-lg"
            style={{
              animation: "0.4 ease 0s 1 normal none running overlay-fade-in",
            }}
          >
            <div className="w-[93%] pt-3 pl-2.5">
            <Link to="/" className="flex items-center">
            <Logo/>
          </Link>
              <div className="flex items-center justify-between border-y-2 my-2 py-6 px-4 md:hidden">
                <p class="rounded-full w-8 h-8 flex justify-center items-center bg-blue-600 mr-6">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-gray-300 bg-clip-text rounded-full"
                    height="13"
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    </g>
                  </svg>
                </p>
                <p class="flex flex-col flex-1 text-sm">
                  <span class="font-semibold">$</span>
                  <span class="text-gray-600 text-xs">$</span>
                </p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </div>
              <div className="py-6 px-1 mb-5 w-11/12 hidden md:block">
                <div class="uppercase mt-3  text-xs tracking-wide text-white font-semibold tra">
                  Main account Balance
                </div>
                <p class="text-2xl font-semibold text-red-600">
                ${mainAccountBalance} <span class="text-lg">USD</span>
                </p>
                <p class="flex justify-between text-white mt-3 font-medium text-sm">
                  <span>Total Deposit</span>
                  <span>${depositBalance} usd</span>
                </p>
                <p class="flex justify-between text-white mt-3 font-medium text-sm">
                  <span>Total Withdraw</span>
                  <span>${mainWithdrawalBalance} usd</span>
                </p>
                <p class="flex justify-between items-center font-semibold pt-5">
                  <Link
                    class="flex items-center pl-4 pr-2 py-1.5 hover:text-white text-sm bg-red-500 text-white rounded"
                    to="/deposit"
                  >
                    <span>Deposit</span>
                  </Link>
                  <Link
                    class="px-4 py-1.5 text-sm bg-yellow-500 hover:text- text-white rounded"
                    to="/withdraw"
                  >
                    Withdraw
                  </Link>
                </p>
              </div>
              <div className="w-11/12 font-medium text-white text-sm">
                <div class="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider">
                  Menu
                </div>
                <ul>
                  <Link
                    class="flex text-gray-500 hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12  active"
                    to="/dashboard"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      class="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                    <span className="text-white">Dashboard</span>
                  </Link>
                  <Link
                    class="flex text-red-500 focus:text-red-500 hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/deposit"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                      </g>
                    </svg>
                    <span className="text-white">Deposit</span>
                  </Link>
                  <Link
                    class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/withdraw"
                    style={{ color: "rgb(82, 100, 132)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                      </g>
                    </svg>
                    <span className="text-white">Withdraw</span>
                  </Link>
                  <Link to='/auth'>
                  <p
                    class="flex text-[#526484] hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                    </svg>
                    <span className="text-[#526484]">Sign Out</span>
                  </p>
                  </Link>
                </ul>
              </div>
            </div>
          </section>

          {/* Deposit Content */}
          <div className="flex-1 bg-[#f5f6fa]">
            <ToastContainer />
            <div className="pt-2 px-3 flex items-center justify-between border-b border-gray bg-black">
            <div class="bg-blue-500 p-0 relative -top-1" onClick={showDrawer}>
                <span tabindex="0" class="btn btn-ghost btn-circle  md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 e text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="justify-self-center pb-2 ">
              <Link to="/" className="flex items-center">
            <Logo/>
          </Link>
              </div>
              <div class="py-1">
              <Link to='/Profile'>
                <p class="rounded-full w-8 h-8 flex justify-center items-center bg-rose-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-gray-300 bg-clip-text rounded-full"
                    height="13"
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    </g>
                  </svg>
                </p>
                </Link>
              </div>
            </div>

            <section class="bg-[#000000] md:flex flex-col justify-center h-screen">
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
                    className="border font-normal text-base border-gray-300 py- px-2 md:p-2 rounded shadow-sm placeholder:text-sm md:placeholder:text-base"
                  />
                  <p class="text-xs text-red-600 tracking-wide pt-1 font-medium">
                    Min: $50
                  </p>
                </p>
                <select
                  class="py-1.5 rounded w-72 md:w-80 font-normal mb-4 border mt-1 border-gray-200  text-base"
                  onChange={handlePaymentMethodChange}
                  value={selectedPaymentMethod}
                >
                  <option value="btc">Bitcoin</option>
                  <option value="eth">Ethereum</option>
                  <option value="bank">Bank</option>
                  <option value="USDT">USDT</option>
                </select>
                <p class="flex flex-col w-72 md:w-80 lg:w-96 text-base mb-3">
                  <span class="text-sm pb-2 font-normal text-white">Description</span>
                  <textarea
                    placeholder="Optional"
                    class="border pt-2 text-gray-900 text-base border-gray-300 py- px-2 md:p-2 rounded shadow-sm font-normal placeholder:text-sm md:placeholder:text-base"
                  ></textarea>
                </p>
                <button
                  onClick={showModal}
                  class="px-3 py-1.5 w-72 md:w-80 lg:w-96 md:py-2.5 text-sm bg-yellow-500 text-white font-medium rounded uppercase mt-3 md:mt-0"
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
          <th className="border border-gray-300 bg-gray-200 px-2 py-1 rounded-tl-md">Transaction ID</th>
          <th className="border border-gray-300 bg-gray-200 px-2 py-1">Amount</th>
          <th className="border border-gray-300 bg-gray-200 px-2 py-1 rounded-tr-md">Time Deposited</th>
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
                  onOk={handleOk}
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
