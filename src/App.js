import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Landing/Home";
import Signup from "./pages/Landing/Signup";
import About from "./pages/Landing/About";
import Auth from "./pages/Landing/Auth";
import Dashboardx from "./pages/Landing/Dashboard/Dashboardx";
import Deposit from "./pages/Landing/Dashboard/Deposit";
import Withdraw from "./pages/Landing/Dashboard/Withdraw";
import Benefits from "./pages/Landing/Benefits";
import Advantages from "./pages/Landing/Advantages";
import Faq from "./pages/Landing/Faq";
import Profilex from "./pages/Landing/Dashboard/Profilex";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AccountDetails from "./pages/Admin/AccountDetails";
import Adminprofile from "./pages/Admin/Adminprofile";
import Adminlogin from "./pages/Admin/Adminlogin";
import UpdateEarnings from "./pages/Admin/UpdateEarnings";

//import Dashboard from "./pages/Admin/Dashboard";
//import Clients from "./pages/Admin/Clients";
//import PriceUpdate from "./pages/Admin/PriceUpdate";
//import PushDetails from "./pages/Admin/PushDetails";

//import admin-dashboardx from "./pages/Admin/admin-dashboardx";
//import UserDetailsPage from "./pages/Admin/UserDetailsPage";
//import UserListPage from "./pages/Admin/UserListPage";

const App = () => {
  const { email } = useSelector((state) => state.auth.user_details || {});
  const props = { email };

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboardx />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/About" element={<About />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/Advantages" element={<Advantages />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Profile" element={<Profilex />} />
         {/* Conditionally render admin routes if user is admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/Acct" element={<AccountDetails />} />
          <Route path="/admin-profile" element={<Adminprofile />} />
          <Route path="/Admin/admin-login" element={<Adminlogin />} />
          <Route path="/Earnings" element={<UpdateEarnings/>} />
      
      
       {/** <Route path="/admin/*" element={<AppRoutes />} /> */}
    {/* <Route path="/admin" element={<Dashboard/>} />*/}
    {/* <Route path="/clients" element={<Clients/>} />*/}
    {/* <Route path="/prices" element={<PriceUpdate/>} />*/}
     {/*<Route path="/details" element={<PushDetails/>} />*/}
     {/*<Route path="/Admin-render" element={<AdminApp/>} />*/}
        {/* <Route path="/admin/withdrawals" element={<Withdrawal />} /> */}
        {/* <Route path="/admin/deposits" element={<UserDep />} /> */}
       {/*<Route path= "/userdetailsPage" element={<UserDetailsPage/>}/>|*/} 
      {/*<Route path= "/userlistPage" element={<UserListPage/>}/>*/}

      </Routes>
    </div>
  );
};

export default App;