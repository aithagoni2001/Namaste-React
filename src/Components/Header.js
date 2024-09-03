import {LOGO_URL} from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;