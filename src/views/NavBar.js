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

          <div class="md:hidden">
            <div
              id="hamburger"
              className={hamBurgetState ? "open" : ""}
              onClick={() => setHamBurgetState(!hamBurgetState)}
            >
              <svg width="50" height="50" viewBox="0 0 100 100">
                <path
                  class="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path class="line line2" d="M 20,50 H 80" />
                <path
                  class="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </div>
          </div>
          <div
            className="navLink hidden w-full md:flex md:w-auto"
            id="navbar-default"
          >
            <ul className="flex  p-4  space-x-12 mt-0 lg:mr-8 mr-4 text-md font-medium ">
              <li>
                <Link
                  to="/"
                  className="py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-[#2A4C9A] "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="author"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                  Author
                </Link>
              </li>
              <li>
                <Link
                  to="book"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className=" py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A4C9A] md:p-0 "
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
