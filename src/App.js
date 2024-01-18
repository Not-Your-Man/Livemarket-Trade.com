import { Routes, Route } from "react-router-dom";
// import Homex from "./pages/landingx/Homex";
import { useSelector } from "react-redux";
import Home from "./pages/Landing/Home";
import Signup from "./pages/Landing/Signup";
import About from "./pages/Landing/About";
import Auth from "./pages/Landing/Auth";
import Dashboardx from "./pages/Landing/Dashboard/Dashboardx";
import Deposit from "./pages/Landing/Dashboard/Deposit";
import Withdraw from "./pages/Landing/Dashboard/Withdraw";


const App = () => {
  const { email } = useSelector((state) => state.auth.user_details);
  const props = { email };

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboardx />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        {/* <Route path="/admin/withdrawals" element={<Withdrawal />} /> */}
        {/* <Route path="/admin/deposits" element={<UserDep />} /> */}
      </Routes>
    </div>
  );
};

export default App;
