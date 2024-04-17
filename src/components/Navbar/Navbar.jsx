import { navLowLinks, navTopLinks } from "../../constants";
import { logo } from "../../assets";
import {
  MdOutlineMonitor,
  MdOutlineShoppingBag,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* TopBar  */}
      <div className="nav__top">
        <div className="nav__top-links">
          {navTopLinks.map((link) => (
            <a key={`nav-top-${link.route}`} href={link.route}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav__top-btn">
          <p>⭐️ Experience OffGamers New Theme</p>
          <button className="button">Shop Now</button>
        </div>
      </div>
      {/* BottomBar  */}
      <div className="nav__low">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="nav__low-links">
          {navLowLinks.map((item) => (
            <div key={`nav-low-${item.route}`} className="nav__low-link">
              <MdOutlineMonitor />
              <a>{item.label}</a>
            </div>
          ))}
        </div>
        <div className="nav__low-icons">
          <IoSearchSharp />
          <div className="shopping">
            <p>$0</p>
            <MdOutlineShoppingBag />
          </div>
          <div className="sign-in">
            <MdOutlineAccountCircle />
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
