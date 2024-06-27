import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="body-font bg-slate-700 text-white  sticky top-0 z-50 bg-opacity-70">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link to="/" className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer">
            Home
          </Link>
          <Link to="/product" className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer">
            Product
          </Link>
          <Link to="/service" className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer">
            Service
          </Link>
          <Link to="/blog" className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer">
            Blog
          </Link>
          <Link to="/about" className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer">
            Contact
          </Link>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 cursor-pointer lg:items-center lg:justify-center mb-4 md:mb-0">
          <img className="w-[50px] border-2 border-white rounded-full" src="../../public/Sugarcane.jpg" alt="Logo" />
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-slate-800 border-0 py-1 px-3 focus:outline-none hover:bg-slate-900 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
