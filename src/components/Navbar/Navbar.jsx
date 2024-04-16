import { navLowLinks, navTopLinks } from "../../constants";
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
      <div className="nav__low"></div>
    </nav>
  );
};

export default Navbar;
