import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Footer = () => {
  const handleNavigation = (path) => {
    window.location.href = `#${path}`; // ✅ Uses hash-based routing for GitHub Pages
  };

 
  return (
    <footer className="bg-gray-900 text-white py-10 w-full cursor-pointer ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Section - Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-500">Portfolio</h2>
            <p className="text-gray-400 mt-3">
              Showcasing my creative and development journey.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div >
            <h3 className="text-xl font-semibold text-green-500">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li className="hover:text-green-400 transition">
                <a  onClick={() => handleNavigation("/About")}>About</a>
              </li>
              <li className="hover:text-green-400 transition">
                <a onClick={() => handleNavigation("/Portfolio")}>Projects</a>
              </li>
              <li className="hover:text-green-400 transition">
                <a onClick={() => handleNavigation("/ContactDetails")}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-green-500">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://github.com/shaikvahab" className="hover:text-green-400 transition text-2xl">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shaik-khaja-vahab-799277213/" className="hover:text-green-400 transition text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" className="hover:text-green-400 transition text-2xl">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" className="hover:text-green-400 transition text-2xl">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Shaik khaja vahab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
