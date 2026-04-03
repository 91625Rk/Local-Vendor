import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#020617] border-b border-gray-800">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-purple-400">
        LocalVendor
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-6 text-gray-300">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>

        <Link to="/vendor" className="hover:text-white transition">
          Vendors
        </Link>

        <Link to="/dashboard" className="hover:text-white transition">
          Dashboard
        </Link>

        <Link to="/admin" className="hover:text-white transition">
          Admin
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex gap-4 items-center">
        <button className="text-gray-300 hover:text-white">
          Login
        </button>

        <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;