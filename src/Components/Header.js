import {LOGO_URL} from "../utils/constants";
import { useState, } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  const [btnName, setbtnName]= useState("login")

  const Onlinestatus = useOnlinestatus();

    return (
<<<<<<< HEAD
      <div className="flex justify-between bg-slate-300 shadow-lg">
       
          <img
            className="w-40"
            src={LOGO_URL}
            alt="loading"
          />
        <div className="flex items-center">
          <ul className="flex m-4 p-3">
            <li className="p-5">Onlinestatus:{Onlinestatus? "✅":"🚫"}</li>
            <li className="p-5">
            <Link to="/">Home</Link></li>
            <li className="p-5">
            <Link to="/about">About Us</Link></li>
            <li className="p-5">
            <Link to="/contact">Contact Us</Link></li>
            <li className="p-5">
            <Link to="/instamart">Instamart</Link></li>
            <li className="p-5"> Cart</li>
            <button className="p-5"
=======
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
>>>>>>> b13f0bec07cd1ec2793178187dcfcec6abf5ac2f
             onClick={()=>{btnName==="login"? setbtnName("logout"): setbtnName("login");
              console.log(btnName)}}
              >{btnName}</button> 
          </ul>
        </div>
      </div>
    );
  };

  export default Header;