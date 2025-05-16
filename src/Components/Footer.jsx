import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiTwitter,
} from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl text-sm mx-auto grid grid-cols-1 md:grid-cols-3 gap-12  ">
        {/* Quick Links & Subscription */}
        <div className='text-left'>
          <h3 className="text-lg font-thin mb-4">Quick links</h3>
          <ul className="space-y-2  text-gray-600">
            <Link to="/faceanalyzer">
            <li><a href="#" className="hover:text-black">Face Anaylser</a></li>
            </Link>
            <li><a href="#" className="hover:text-black">Shoes</a></li>
            <li><a href="#" className="hover:text-black">Lookbook</a></li>
          </ul>

          {/* Email Subscription */}
          {/* <div className="mt-10">
            <h3 className="text-lg font-medium mb-2">Subscribe to our emails</h3>
            <div className="flex items-center border border-gray-400 w-full mt-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 outline-none"
              />
              <button className="px-4 text-gray-600 hover:text-black">
                →
              </button>
            </div>
          </div> */}
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg text-left font-medium mb-4">Info</h3>
          <ul className="space-y-2 text-left text-gray-600">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact us</a></li>
            <li><a href="#" className="hover:text-black">Shipping policy</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
          </ul>
        </div>

        <div>
             {/* Mission */}
        <div>
          <h3 className="text-lg text-left font-medium mb-4">Our mission</h3>
          <p className="text-left text-gray-600">
            Quality materials, good designs, craftsmanship <br />
            and sustainability.
          </p>
        </div>

        <div className="mt-10 text-left flex justify-center space-x-6 text-gray-800 text-xl">
        <a href="#" aria-label="Facebook"><FiFacebook /></a>
        <a href="#" aria-label="Instagram"><FiInstagram /></a>
        <a href="#" aria-label="YouTube"><FiYoutube /></a>
        <a href="#" aria-label="Twitter"><FiTwitter /></a>
      </div>
        </div>

        {/* Mission
        <div>
          <h3 className="text-lg text-left font-medium mb-4">Our mission</h3>
          <p className="text-left text-gray-600">
            Quality materials, good designs, craftsmanship <br />
            and sustainability.
          </p>
        </div> */}
      </div>

      {/* Social Icons
      <div className="mt-10 text-left flex justify-end space-x-6 text-gray-800 text-xl">
        <a href="#" aria-label="Facebook"><FiFacebook /></a>
        <a href="#" aria-label="Instagram"><FiInstagram /></a>
        <a href="#" aria-label="YouTube"><FiYoutube /></a>
        <a href="#" aria-label="Twitter"><FiTwitter /></a>
      </div> */}
    </footer>
  );
};

export default Footer;
