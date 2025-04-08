import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-white font-bold">
                <span className="text-xl">ShopNow</span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 hover:text-blue-200">Home</a>
              <a href="#" className="py-5 px-3 hover:text-blue-200">Products</a>
              <a href="#" className="py-5 px-3 hover:text-blue-200">About</a>
              <a href="#" className="py-5 px-3 hover:text-blue-200">Contact</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded">Login</a>
            <a href="#" className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded">Sign Up</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`mobile-menu md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Products</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Contact</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Login</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;