import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Landing/Home";
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
import PrivateRoute from './PrivateRoute';
import Status from './pages/Admin/Status';


const App = () => {
  return (
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
          <Route
        path="/admin"
        element={<PrivateRoute children={<AdminDashboard />} />} // Protected route
  />
          <Route path="/Acct" element={<PrivateRoute children={<AccountDetails />} />} />
          <Route path="/admin-profile" element={<PrivateRoute children={< Adminprofile />} />} />
          <Route path="/Earnings" element={<PrivateRoute children={< UpdateEarnings/>} />} />
          <Route path="/Status" element={<PrivateRoute children={< Status/>} />} />
          <Route path="/admin-login" element={<Adminlogin/>} />
         
      </Routes>
     
  );
};

export default App;
