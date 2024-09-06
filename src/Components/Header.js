import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName]= useState("login")

    return (
      <div className="header">
        <div className="logo-con">
          <img
            className="logo"
            src={LOGO_URL}
            alt="loading"
          />
        </div>
        <div className="header-items">
          <ul className="orderlist">
            <li className="list">Home</li>
            <li className="list">About Us</li>
            <li className="list">Contact Us</li>
            <li className="list"> Cart</li>
            <button className="login-btn"
             onClick={()=>{btnName==="login"? setbtnName("logout"): setbtnName("login");
              console.log(btnName)}}
              >{btnName}</button> 
          </ul>
        </div>
      </div>
    );
  };

  export default Header;