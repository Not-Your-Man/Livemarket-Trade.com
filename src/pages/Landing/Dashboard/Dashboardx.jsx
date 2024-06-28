import React, { useEffect, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import axios from 'axios';
import { Button, Drawer, Radio, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Widget2 from "./Widget2";
import Logo from "../../../components/assets/common/Logo";
import gif from "../../../components/assets/images/gif1.gif"
import { MdInfo } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Rotate.css";

const Dashboardx = ({ userId }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const storedBalance = localStorage.getItem("mainAccountBalance");
  
  const [mainAccountBalance, setMainAccountBalance] = useState(() => {
    const storedBalance = localStorage.getItem("mainAccountBalance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  });
  
  const [depositBalance, setDepositBalance] = useState(() => {
    const storedBalance = localStorage.getItem("depositBalance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  });

  // In the other page/component
const mainWithdrawalBalance = parseFloat(localStorage.getItem('mainWithdrawalBalance')) || 0;

  const [earnings, setEarnings] = useState(null);

  useEffect(() => {
    fetchEarnings();
  }, []);

  const fetchEarnings = async () => {
    try {
      const response = await axios.get(`https://livemarket-trade-server.onrender.com/api/earnings/:userId`);
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

  const usery = useSelector((state) => state.auth.user);
  const [user, setUser] = useState({
    ...usery,
  });
  console.log({ user });  

  return (
    <div>
     
      {/* DRAWER */}
      <Drawer
      
        placement={placement}
        closable={false}
        open={open}
        key={placement}
      >
        <div className=" w-[93%] pt-6 pl-2.5 default_cursor_cs x">
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
        <div className="flex items-center justify-between border-y-2 my-2 py-6 px-4">
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
          {/* left Section */}
          <section
            className="hidden md:relative z-10 top-0 left-0 bottom-0 w-full bg-black md:flex md:flex-col md:items-centuer md:w-4/12 lg:w-[15%] bg-red-5 shadow-lg"
            style={{
              animation: "0.4 ease 0s 1 normal none running overlay-fade-in",
            }}
          >
            <div className="w-[93%]u pt-3 pl-2.5u">
              <Link to="/" className="flex justify-center items-center">
                <Logo/>
              </Link>
              <div className="font-medium text-white text-sm border-t border-gray-300 border-opacity-50">
                <div class="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider">
                  Menu
                </div>
                <ul className="space-y-5">
                  <Link
                    class="flex text-red-500 hover:bg-slate-200 focus:text-red-500 items-center py-3 px-3 rounded w-10/12"
                    to="/user/dashboard"
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
                    class="flex text-white hover:bg-slate-700 items-center py-3 px-3 rounded w-10/12"
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
                    class="flex text-white hover:bg-slate-700 items-center py-3 px-3 rounded w-10/12"
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

          {/* Dashboard content */}
          <div className="flex-1 min-h-screen bg-[#000000]">
  {/* dashnav */}
  <div className="py-[13px] px-3 flex items-center justify-between border-b border-gray-200 bg-black">
            <div class="bg-blue-500 p-0 fixed top-0 left-0 z-50" onClick={showDrawer}>
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
              <div className="text-whitet flex gap-1">
                <MdInfo className="text-[#222074]"/>
                <p className="text-xs pt0">1BTC = $99.99sum</p>
              </div>
              {/* <div class="justify-self-center pb-2">
              <Link to="/" className="flex items-center">
                <Logo/>
              </Link>
              </div> */}
              <div class="flex gap-10 py-1">
                <div className="hidden md:flex">
                  <button className="bg-[#222074] text-white text-xs font-Poppins py-3 px-7 rounded-lg">
                    Refresh Page
                  </button>
                </div>
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
            {/* dashnav */}

             {/* Main-content */}
             <div className="">
             <section className="md:flex md:justify-between md:px-20 pb-3">
      <div className="lg:w-[50%] lg:flex plh-6 pt-6 lg:mt-20 md:px-0 px-2">
                  <div className="w-[40%]">
                    <p class="text-white">Welcome!</p>
                  <p class="text-xl lg:text-3xl mt-3 font-medium pb-0 mb-0 capitalize">
                    {user.name}
                  </p>
                  <p class="text-xs lg:text-sm text-slate-700 pb-3 font-medium">
                    {user.email}
                  </p>
                  <p class="text-white text-sm lg:text-sm">
                    Here's a summary of your account. Have fun!
                  </p>
                  </div>
                  

                  <div>
                    <img className="w-[110f%]" src={gif} alt="recording" />
                  </div>
                </div>

                <div className="lg:w-[50%] md:flex md:justify-end md:mt-12 md:px-0 px-2">
                  <div className="space-y-10">
                    <div className="flex gap-2 px-5 pt-3 rounded-lg text-white bg-black">
                      <div className="flex ">
                        <BsCurrencyDollar size={30} className="mt-3 rotate-icon" />
                        <FaCoins size={40} className="" />
                      </div>
                      <div className="flex gap-20">
                        <p className="font-semibold text-3xl">${mainAccountBalance}</p>
                        <p className="text-sm text-white pt-3">Available Balance</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between px-5 pt-3 rounded-t-lg text-white bg-black">
                        <div className="fl">
                          <p className="text-xs text-white">Earnings/Day</p>
                          <p className="font-semibold text-2xl">${earnings}</p>
                        </div>
                        <div className="flex ">
                        <FaChartPie className="mt-4" />
                        </div>
                      </div>
                      <div className="flex justify-between px-5 pt-3 border-y border-gray-500 text-white bg-black">
                        <div className="fl">
                          <p className="text-xs text-white">Total Deposit</p>
                          <p className="font-semibold text-2xl">${depositBalance}</p>
                        </div>
                        <div className="flex ">
                        <FaChartPie className="mt-4" />
                        </div>
                      </div>
                      <div className="flex justify-between px-5 pt-3 rounded-b-lg text-white bg-black">
                        <div className="fl">
                          <p className="text-xs text-white">Total Withdrawal</p>
                          <p className="font-semibold text-2xl">${mainWithdrawalBalance}</p>
                        </div>
                        <div className="flex ">
                        <FaChartPie className="mt-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </section>

                  <div className="z-10 w-full">
                <Widget2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardx;
