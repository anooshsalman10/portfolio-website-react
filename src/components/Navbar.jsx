import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // for toggle open/close feature in mobile
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable active class function (like Threadify navbar)
  const getNavClass = ({ isActive }) =>
    `relative group pb-1 transition-colors duration-300 ${isActive ? "text-[#8245ec]" : "text-gray-300 hover:text-[#8245ec]"
    }`;

  const menuItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "My Journey" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300  px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled
        ? "bg-dark-100/90 bg-opacity-50 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className="text-white py-6 px-0 flex justify-between items-center">

        {/* Logo — links to home */}
        <div className="left-6">
          <NavLink to="/" className="text-lg font-semibold cursor-pointer">
            <img src={logo1} alt="Anoosh Portfolio Logo" className="h-16 w-28" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink to={`/${item.id}`} className={getNavClass}>
                {item.label}

                <span className=" absolute left-0 -bottom-1 h-[2px] bg-[#8245ec] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/anooshsalman10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anoosh-salman-2b098b201/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div >

      {/* Mobile Menu Items */}
      {
        isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-gray-900 bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={`/${item.id}`}
                    className={getNavClass}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span className=" absolute left-0 -bottom-1 h-[2px] bg-[#8245ec] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}

              <div className="flex space-x-4">
                <a
                  href="https://github.com/anooshsalman10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anoosh-salman-2b098b201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul >
          </div >
        )
      }
    </nav >
  );
};

export default Navbar;