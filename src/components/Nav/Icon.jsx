import { Link } from "react-router-dom";
import { FaTrademark } from "react-icons/fa";
const Icon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-xl shadow-md w-40 pointer py-2 relative ptx-4 flex justify-center bg-black text-white updpercase m-3 font-bold  border-2 items-center text-[18px]"
      >
        Rhode
        <span className="text-sm ml- rounded bg-red-600 px-1 font-extrabold font-mono text-black">
          Analytics
        </span>
        <span
          className=" text-white bdg-white absolute left-[140px] righdt-0.5 pt-1 top-0.5"
          style={{ fodntSize: "3px" }}
        >
          <FaTrademark />
        </span>
      </Link>
    </>
  );
};

export default Icon;
