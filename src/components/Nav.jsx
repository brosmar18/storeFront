import { logo } from "../assets";
import { navigation } from "../constants";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary-darkBlue relative">
      <div className="py-3 px-8 md:py-5 md:px-10 flex items-center justify-between">
        <a href="#home" className="md:hidden lg:block">
          <img src={logo} alt="logo" className="h-[30px] w-[60px]" />
        </a>
        <div className="hidden md:flex items-center gap-4">
          {navigation.map((item) => (
            <a href={item.route} key={item.route}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex md:items-center md:gap-2">
          <button
            type="button"
            className="px-3 py-1.5 bg-primary-neonGreen rounded-md"
          >
            Login
          </button>
          <button
            type="button"
            className="px-3 py-1.5 bg-primary-neonGreen rounded-md"
          >
            Register
          </button>
        </div>
        {/* MOBILE NAV */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoClose size={35} /> : <IoMenu size={35} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-18 right-0 w-[240px] bg-primary-darkBlue py-4 flex flex-col items-center md:hidden">
          <div className="px-5 flex flex-col items-center justify-between">
            {navigation.map((item) => (
              <a
                href={item.route}
                key={item.route}
                className="text-white"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="px-5 pt-8 flex items-center gap-10">
            <button
              type="button"
              className="px-3 py-1.5 bg-primary-neonGreen rounded-md"
              onClick={closeMenu}
            >
              Login
            </button>
            <button
              type="button"
              className="px-3 py-1.5 bg-primary-neonGreen rounded-md"
              onClick={closeMenu}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
