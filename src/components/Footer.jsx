import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white  py-3 fixed bottom-0 left-0 w-full ">
      <div className="max-w-auto mx-auto  px-8 grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition cursor-pointer"><Link to='/about'>About</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link to='/contactus'>Contact Us</Link></li>
            <li className="hover:text-white transition cursor-pointer"><Link to='/help'>Help Center</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-gray-400">
            <a href="#" className="hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} ApiBuild. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
