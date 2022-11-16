import { Outlet, Link } from "react-router-dom";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [hamBurgetState, setHamBurgetState] = useState(false);
  const [aboutState, setAboutState] = useState(false);

  return (
    <>
      {" "}
      <nav
        className="bg-[#FEFCF0] px-4 sm:px-8 py-4 fixed top-0 w-full z-50 text-black"
        id="navbar"
      >
        <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to="author" className="flex items-center">
            <span className="md:text-5xl text-xl font-semibold whitespace-nowrap font-Montserrat ">
              Barbara Tieken
            </span>
          </Link>

          <div className="navLink  w-full flex md:w-auto" id="navbar-default">
            <ul className="flex  p-4 md:space-x-15 space-x-4 mx-auto mt-0 text-md font-medium ">
              <li>
                <Link
                  to="/"
                  className="py-2  rounded md:bg-transparent md:p-0 md:hover:text-[#DB723F] "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="author"
                  className=" py-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#DB723F] md:p-0 "
                >
                  Author
                </Link>
              </li>
              <li>
                <Link
                  to="book"
                  className=" py-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#DB723F] md:p-0 "
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className=" py-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#DB723F] md:p-0 "
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
