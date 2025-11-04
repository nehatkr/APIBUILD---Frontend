import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // 🖼️ replace with your actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-auto mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-14 w-14 rounded-full" />
          <h1 className="text-2xl font-semibold">ApiBuild</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
            <li>
            <Link to="/pricing" className="hover:text-gray-200 transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-200 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200 transition">
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-white text-black px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link to="/dashboard" className="hover:text-gray-400 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition inline-block"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
