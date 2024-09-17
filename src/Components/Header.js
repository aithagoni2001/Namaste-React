import {LOGO_URL} from "../utils/constants";
import { useState, } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  const [btnName, setbtnName]= useState("login")

  const Onlinestatus = useOnlinestatus();

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
            <li className="list">Onlinestatus:{Onlinestatus? "✅":"🚫"}</li>
            <li className="list">
            <Link to="/">Home</Link></li>
            <li className="list">
            <Link to="/about">About Us</Link></li>
            <li className="list">
            <Link to="/contact">Contact Us</Link></li>
            <li className="list">
            <Link to="/instamart">Instamart</Link></li>
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