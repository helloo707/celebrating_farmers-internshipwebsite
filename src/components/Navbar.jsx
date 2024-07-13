import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="body-font bg-slate-700 text-white sticky top-0 z-50 bg-opacity-70">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <img
            className="w-[50px] border-2 border-white rounded-full"
            src="../../public/logo.png"
            alt="Logo"
          />
          <span className="ml-3 text-xl text-white">C.F.E.I</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center gap-4 ">
          <Link
            to="/"
            className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer "
          >
            Home
          </Link>
          <Link
            to="/product"
            className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer"
          >
            Product
          </Link>
          <Link
            to="/service"
            className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer"
          >
            Service
          </Link>
          <Link
            to="/blog"
            className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
