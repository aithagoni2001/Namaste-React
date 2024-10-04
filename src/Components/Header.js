import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const Onlinestatus = useOnlinestatus();

  const {LoggedInUser} = useContext(UserContext);
  // console.log(LoggedInUser);

  const cartitems = useSelector((store)=>store.cart.items);

  console.log(cartitems)
  

  return (
    <div className="flex justify-between bg-orange-200 shadow-lg">
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
          <li  class="p-4 text-xl text-red-600 ">🛒({cartitems.length})</li>
          <button
            className="p-5"
            onClick={() => {
              setbtnName(btnName === "login" ? "logout" : "login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <li className="p-5 text-sm font-bold" >{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
