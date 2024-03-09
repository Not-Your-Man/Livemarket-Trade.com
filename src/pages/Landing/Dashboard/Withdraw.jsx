import React, { useState, useEffect} from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../../components/assets/common/Logo";
import ReactModal from 'react-modal';


const Withdraw = () => {
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
      const emailLink = `mailto:invest@firstradeaucity.online?subject=Withdrawal Process`;
    
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
        <div className="w-11/12 font-medium text-slate-700 text-sm">
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
           
          </ul>
        </div>
      </Drawer>

      {/* content */}
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
                  <span>${totalWithdrawal} usd</span>
                </p>
                <p class="flex justify-between items-center font-semibold pt-5">
                  <Link
                    class="flex items-center pl-4 pr-2 py-1.5 hover:text-white text-sm bg-red-500 text-white rounded"
                    to="/deposit"
                  >
                    <span>Deposit</span>
                  </Link>
                  <Link
                    class="px-4 py-1.5 text-sm bg-yellow-500 hover:text-white text-white rounded"
                    to="/withdraw"
                  >
                    Withdraw
                  </Link>
                </p>
              </div>
              <div className="w-11/12 font-medium text-slate-700 text-sm">
                <div class="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider text-white">
                  Menu
                </div>
                <ul>
                  <Link
                    class="flex hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12  active"
                    to="/dashboard"
                    style={{ color: "rgb(82, 100, 132)" }}
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
                    <span className="text-white">Deposit</span>
                  </Link>
                  <Link
                    class="flex text-red-500 focus:text-red-500 hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/withdraw"
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
                  
                </ul>
              </div>
            </div>
          </section>
          {/* withdraw content */}
          <div className="flex-1 h-screen bg-[#000000]">
            <div className="pt-2 px-3 flex items-center justify-between border-b border-gray-200 bg-black">
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
              <div class="justify-self-center pb-2">
              <Link to="/" className="flex items-center">
            <Logo/>
          </Link>
              </div>
              <div class="py-1">
                <ToastContainer />
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

            <div className="bg-[#000000] md:flex flex-col justify-center font-normal">
      <div className="flex flex-col items-center font-semibold text-2xl px-0 md:px-6 pt-8 h-full">
        <p className="text-lg md:text-3xl text-white text-center mt-6">
          Withdraw Funds
        </p>
        <p className="text-center font-normal text-sm px-2 md:w-1/3 text-white">
          Secure and safely deposit money into your account
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
                  className="py-1.5 rounded border mt-1 border-gray-200 w-full  text-base"
                  value={withdrawalMethod}
                  onChange={(e) => setWithdrawalMethod(e.target.value)}
                >
                  <option value="">Select method</option>
                  <option value="btc">Bitcoin</option>
                  <option value="eth">Ethereum (ERC20)</option>
                  <option value='usdt'>USDT (ERC20)</option>
                  <option value='bank'>Bank </option>
                </select>
              </div>
              <div className="flex flex-col w-72 md:w-80 lg:w-96 text-base">
                <span className="text-sm pb-2 font-semibold text-white">
                  Description (Optional):
                </span>
                <input
                  type="text"
                  className="py-1 px-2 text-base rounded border mt-1 mb-4 border-gray-200 md:w-96"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <p className="flex flex-col w-72 md:w-80 lg:w-96 text-base">
          <span className="text-sm pb-2 font-semibold text-white">Amount to withdraw:</span>
          <input
            type="number"
            className="py-1 px-2 text-base rounded border mt-1 mb-4 border-gray-200 md:w-96"
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
              <div className="overflow-auto max-h-48">
                <table className="border-collapse w-full text-xs">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 bg-gray-200 px-2 py-1 rounded-tl-md">Transaction ID</th>
                      <th className="border border-gray-300 bg-gray-200 px-2 py-1">Amount</th>
                      <th className="border border-gray-300 bg-gray-200 px-2 py-1 rounded-tr-md">Time of withdrawal</th>
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
 </div>
  );
};
export default Withdraw;
