"use client"
import React, { useState } from 'react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center">
        {/* Navbar */}
        <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Home</h1>
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-1 bg-gray-800"></span>
              <span className="block w-6 h-1 bg-gray-800"></span>
              <span className="block w-6 h-1 bg-gray-800"></span>
            </div>
          </button>
          <ul className="hidden sm:flex space-x-4 text-gray-800 font-semibold">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
           
          </ul>
          
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="sm:hidden bg-white w-full p-4 space-y-2 shadow-md text-gray-800">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
     
          </ul>
        )}

        {/* Main Content */}
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md text-center mt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome Home</h1>
          <p className="text-gray-600 mb-6">
            This is a beautifully styled home page, designed with Tailwind CSS.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
