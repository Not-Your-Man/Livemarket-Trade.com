import { Routes, Route } from "react-router-dom";
// import Homex from "./pages/landingx/Homex";
import { useSelector } from "react-redux";
import Home from "./pages/Landing/Home";
import Signup from "./pages/Landing/Signup";
import About from "./pages/Landing/About";
import Auth from "./pages/Landing/Auth";


const App = () => {
  const { email } = useSelector((state) => state.auth.user_details);
  const props = { email };

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
