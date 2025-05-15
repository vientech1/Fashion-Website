import React from 'react';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center h-24">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
            <span className="text-2xl font-bold tracking-wide">DADDYDRIP</span>
            </Link>
           
          </div>

         
        
             {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group cursor-pointer hover:underline hover:underline-offset-4">
              <Link to="/faceanalyzer">
              <span className="text-gray-700 hover:text-black ">Face Analyzer</span>
              </Link>
            </div>
            <div className="relative group cursor-pointer hover:underline hover:underline-offset-4">
              <span className="text-gray-700 hover:text-black">Shoes</span>
            </div>
            <a href="#" className="text-gray-700 hover:text-black hover:underline hover:underline-offset-4">
              Lookbook
            </a>
          </div>

          {/* Right: Icons */}
          <div className="flex space-x-6 items-center text-gray-600">
          <Link to="/login">
          <FiUser className="w-6 h-6 cursor-pointer" />
          </Link>
           
          </div>
          </div>
         
        </div>
     
    </nav>
  );
};

export default Navbar;
