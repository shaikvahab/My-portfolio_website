import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false); // Close menu on navigation
    };

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/About" },
        { name: "Skills", path: "/Skills" },
        { name: "Portfolio", path: "/Portfolio" },
        { name: "Testimonial", path: "/Skills" },
        { name: "Contact", path: "/ContactDetails" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
            {/* Logo */}
            <div 
                onClick={() => navigate("/")} 
                className="text-green-600 text-2xl font-bold cursor-pointer"
            >
                My Portfolio
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <button 
                className="md:hidden flex flex-col space-y-1 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`w-6 h-1 bg-green-600 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                <div className={`w-6 h-1 bg-green-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
                <div className={`w-6 h-1 bg-green-600 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleNavigation(item.path)}
                            className="relative px-3 py-2 text-lg transition-all duration-300 hover:text-green-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Download CV Button (Desktop) */}
            <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
                Download CV
            </button>

            {/* Mobile Menu (Dropdown) */}
            <div 
                className={`fixed top-16 right-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col items-center space-y-4 transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                        className="text-gray-700 text-lg transition-all duration-300 hover:text-green-600"
                    >
                        {item.name}
                    </button>
                ))}

                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
                    Download CV
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
