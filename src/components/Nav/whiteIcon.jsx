import { Link } from "react-router-dom";
import { FaTrademark } from "react-icons/fa";
const WhiteIcon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-xl shadow-md w-40 boerder-red-600 border-2 bg-black pointer py-2 relative px- flex justify-center text-whidte updpercase m-3 font-bold text-white items-center text-[18px]"
      >
        Rhode
        <span className="text-sm ml- rounded bg-red-600 px-1 font-extrabold font-mono text-black">
          Analytics
        </span>
        <span
          className=" text-whitd bdg-white absolute right-0.5 pt-1 top-0.5"
          style={{ fodntSize: "3px" }}
        >
          <FaTrademark />
        </span>
      </Link>
    </>
  );
};

export default WhiteIcon;
