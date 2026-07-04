import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => (
  <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
    <div className="h-14 w-30">
      <Link to="/">
        <img src={logo} alt="Sakthi Dental Logo" className="h-full w-full" />
      </Link>
    </div>

    <ul className="hidden md:flex items-center gap-8 list-none">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "text-[#1B4FBE]" : "text-slate-800"} font-semibold text-md hover:text-[#1B4FBE] transition-colors`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${isActive ? "text-[#1B4FBE]" : "text-slate-800"} font-semibold text-md hover:text-[#1B4FBE] transition-colors`
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/treatments"
        className={({ isActive }) =>
          `${isActive ? "text-[#1B4FBE]" : "text-slate-800"} font-semibold text-md hover:text-[#1B4FBE] transition-colors`
        }
      >
        Treatments
      </NavLink>
      <NavLink
        to="/faqs"
        className={({ isActive }) =>
          `${isActive ? "text-[#1B4FBE]" : "text-slate-800"} font-semibold text-md hover:text-[#1B4FBE] transition-colors`
        }
      >
        FAQs
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${isActive ? "text-[#1B4FBE]" : "text-slate-800"} font-semibold text-md hover:text-[#1B4FBE] transition-colors`
        }
      >
        Contact
      </NavLink>
    </ul>

    <button className="bg-linear-to-r from-[#1B4FBE] to-[#4A7FD4] text-white cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-300 hover:shadow-lg transition-shadow">
      Fix an Appointment
    </button>
  </nav>
);

export default Navbar;
