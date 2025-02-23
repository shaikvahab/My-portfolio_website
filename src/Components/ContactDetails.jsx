import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactDetail = () => {


  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");  // Navigate to the homepage when clicking on the logo
  };



  return (
    <section className="py-32 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Get in Touch</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Details */}
        <div className="bg-white shadow-md rounded-lg p-8 transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-green-600 mb-5">Contact Information</h3>

          <div className="flex items-center mb-4">
            <FaEnvelope className="text-red-500 text-2xl mr-4" />
            <a href="/ContactDetails" className="text-gray-700 text-lg hover:text-green-600">
              skkhajavahab@gmail.com
            </a>
          </div>

          <div className="flex items-center mb-4">
            <FaPhone className="text-blue-500 text-2xl mr-4" />
            <span className="text-gray-700 text-lg">+91 7989799186</span>
          </div>

          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
            <span className="text-gray-700 text-lg">Bangalore, India</span>
          </div>

          {/* Social Links */}
          <h3 className="text-xl font-semibold text-green-600 mt-6 mb-4">Social Media</h3>
          <div className="flex space-x-5">
            <a href="https://github.com/shaikvahab" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800 hover:text-gray-600 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shaik-khaja-vahab-799277213/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/developer_dump" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="relative w-full h-full flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}/images/profile.jpg`}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
