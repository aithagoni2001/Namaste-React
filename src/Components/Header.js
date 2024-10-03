import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const Onlinestatus = useOnlinestatus();

  return (
    <div className="flex justify-between bg-slate-300 shadow-lg">
      <img className="w-40" src={LOGO_URL} alt="Logo" />

      <div className="flex items-center">
        <ul className="flex m-4 p-3">
          <li className="p-5">
            Onlinestatus: {Onlinestatus ? "✅" : "🚫"}
          </li>
          <li className="p-5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-5">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-5">Cart</li>
          <button
            className="p-5"
            onClick={() => {
              setbtnName(btnName === "login" ? "logout" : "login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
