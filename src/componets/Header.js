import { FaReact } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";

import "../App.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-lorem-container">
        <p className="header-lorem-name">Lorem ipsum dolor</p>
        <p className="header-lorem-name">Lorem ipsum dolor</p>
        <p className="header-lorem-name">Lorem ipsum dolor</p>
      </div>
      <div className="header-logo-container">
        <FaReact className="header-logo-icon" />
        <h1 className="header-logo-heading">LOGO</h1>
        <div className="header-icons-container">
          <CiSearch className="header-icons" />
          <CiHeart className="header-icons" />
          <RiShoppingBag4Line className="header-icons" />
          <IoIosContact className="header-icons" />
          <select className="header-select">
            <option value="eng">Eng</option>
            <option value="tel">Tel</option>
            <option value="tam">Tam</option>
          </select>
        </div>
      </div>
      <div className="header-tabs-container">
        <p className="header-tab-name">SHOP</p>
        <p className="header-tab-name">SKILLS</p>
        <p className="header-tab-name">STORIES</p>
        <p className="header-tab-name">ABOUT</p>
        <p className="header-tab-name">CONTACT US</p>
      </div>
    </div>
  );
};

export default Header;
