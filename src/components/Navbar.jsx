import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { ExseedLogo } from "../assets/logos/ExseedLogo";

const navbarLinks = [
  { label: "About Us", href: "#home", ariaLabel: "Home" },
  { label: "Features", href: "#features", ariaLabel: "Features" },
  { label: "Careers", href: "#pricing", ariaLabel: "Pricing" },
  { label: "Contact Us", href: "#feedback", ariaLabel: "Feedback" },
];

export const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full ${
        navActive ? "bg-customPrimary shadow-2xl " : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <ExseedLogo />
          <div className="hidden md:flex md:items-center md:ml-4">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-customHeadingColor">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-customHeadingColor">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-customHeadingColor">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-customHeadingColor">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <button className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#F3F6FA"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {/* <div className="text-white">
            <div className="hidden lg:flex h-full space-x-5">
              {navbarLinks.map(({ href, label, ariaLabel }) => (
                <a
                  className="navbar-link"
                  href={href}
                  aria-label={ariaLabel}
                  key={label}
                >
                  <span className="font-semibold">{label}</span>
                </a>
              ))}
            </div>
            <div
              className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-500"></div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="flex flex-col mt-12 text-customHeadingColor bg-customPrimary lg:hidden absolute top-4 left-0 z-50 w-full 
        items-center gap-10 py-8"
          >
            {navbarLinks.map(({ label, href, ariaLabel }) => (
              <a
                key={href}
                className="navbar-link"
                href={href}
                onClick={() => setIsOpen(false)}
                aria-label={ariaLabel}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};
