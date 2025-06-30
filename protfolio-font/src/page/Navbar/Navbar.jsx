import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { MdCastForEducation, MdOutlinePermContactCalendar } from "react-icons/md";
import { AuthContext } from "../../contrext/AuthContext";
import { Link as ScrollLink } from "react-scroll"; // ✅ ঠিকভাবে import করো

const Navbar = () => {
  const { user } = useContext(AuthContext); // ✅ useContext ব্যবহার করো

  const links = (
    <>
      <li>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-gray-500 transition hover:text-gray-200 hover:bg-gray-700 p-2 rounded-lg flex text-lg font-semibold items-center gap-1"
        >
          <IoIosHome size={24} /> Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-gray-500 transition hover:text-gray-200 hover:bg-gray-700 p-2 rounded-lg flex text-lg font-semibold items-center gap-1"
        >
          <FcAbout size={25} /> About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="education"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-gray-500 transition hover:text-gray-200 hover:bg-gray-700 p-2 rounded-lg flex text-lg font-semibold items-center gap-1"
        >
          <MdCastForEducation size={24} /> Education
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-gray-500 transition hover:text-gray-200 hover:bg-gray-700 p-2 rounded-lg flex text-lg font-semibold items-center gap-1"
        >
          <MdOutlinePermContactCalendar size={24} /> Contact
        </ScrollLink>
      </li>

      {user?.email === "mreosmangoni@gmail.com" && (
        <li>
          <NavLink
            to="/addProject"
            className="text-gray-500 transition hover:text-gray-200 hover:bg-gray-700 p-2 rounded-lg flex items-center text-lg font-semibold gap-1"
          >
            <MdOutlinePermContactCalendar size={24} />
            Add Project
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="container mx-auto   shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="text-blue-400 text-2xl font-bold" to="/">
              Osman Goni
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">{links}</ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="btn btn-primary">Resume</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
