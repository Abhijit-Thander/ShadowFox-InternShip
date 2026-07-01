import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => (
  <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
    {/* <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#3B82C4] to-[#E07AA0] flex items-center justify-center text-lg shrink-0">
        🦷
      </div>
      <div className="leading-tight">
        <strong className="block text-[#1A2744] font-semibold text-[15px] font-serif">
          Sakthi Dental
        </strong>
        <span className="text-slate-400 text-xs">Clinic — Hosur</span>
      </div>
    </div> */}
    <div className="h-14 w-30 ">
      <Link to="/">
        <img src={logo} alt="Sakthi Dental Logo" className="h-full w-full " />
      </Link>
    </div>

    <ul className="hidden md:flex items-center gap-8 list-none">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "text-[#3B82C4]" : "text-slate-800"} font-semibold`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${isActive ? "text-[#3B82C4]" : "text-slate-800"} font-semibold`
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="treatments"
        className={({ isActive }) =>
          `${isActive ? "text-[#3B82C4]" : "text-slate-800"} font-semibold`
        }
      >
        Treatments
      </NavLink>
      <NavLink
        to="FAQs"
        className={({ isActive }) =>
          `${isActive ? "text-[#3B82C4]" : "text-slate-800"} font-semibold`
        }
      >
        FAQs
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${isActive ? "text-[#3B82C4]" : "text-slate-800"} font-semibold`
        }
      >
        Contacts
      </NavLink>
    </ul>

    <button className="bg-linear-to-r from-[#3B82C4] to-[#5BA4E0] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-200 hover:shadow-lg transition-shadow">
      Fix an Appointment
    </button>
  </nav>
);

export default Navbar;
