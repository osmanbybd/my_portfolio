import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; 
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import {
  MdCastForEducation,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { AuthContext } from "../../contrext/AuthContext";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const scrollLinkClass =
    "cursor-pointer text-gray-300 transition hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg flex items-center gap-1 text-base font-medium";

  const links = (
    <>
      <li>
        <ScrollLink to="home" smooth duration={500} offset={-80} className={scrollLinkClass}>
          <IoIosHome size={22} /> Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth duration={500} offset={-80} className={scrollLinkClass}>
          <FcAbout size={22} /> About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="education" smooth duration={500} offset={-80} className={scrollLinkClass}>
          <MdCastForEducation size={22} /> Education
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth duration={500} offset={-80} className={scrollLinkClass}>
          <MdOutlinePermContactCalendar size={22} /> Contact
        </ScrollLink>
      </li>
      {/* <li>
        <NavLink to="/message" className={scrollLinkClass}>
          <MdOutlinePermContactCalendar size={22} /> Message
        </NavLink>
      </li> */}

      {user?.email === "mreosmangoni@gmail.com" && (
        <li>
          <NavLink to="/addProject" className={scrollLinkClass}>
            <MdOutlinePermContactCalendar size={22} /> Add Project
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/70 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Osman Goni
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-4">{links}</ul>
          </nav>

          {/* Resume button */}
          <div>
            <a
              href="/osman_goni.pdf"
              download='osman_goni.pdf'
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300 font-semibold shadow"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
