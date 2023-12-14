import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { ExseedLogo } from "../assets/logos/ExseedLogo";

const navbarLinks = [
  { label: "About", href: "/about", ariaLabel: "About" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "Careers", href: "/careers", ariaLabel: "Careers" },
  { label: "Contact", href: "/contact", ariaLabel: "Contact" },
];

export const Navbar = ({ pathname }) => {
  console.log({ pathname });
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
      className={`z-50 w-full fixed ${
        navActive ||
        pathname === "/about" ||
        pathname === "/careers" ||
        pathname === "/contact"
          ? "bg-[#03080e] shadow-2xl "
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <a href="/">
            <ExseedLogo />
          </a>
          <div className="hidden md:flex md:items-center md:ml-4">
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="/about"
                  className={`text-customWhiteText ${
                    pathname === "/about" ? "text-xl" : ""
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a href="/#features" className="text-customWhiteText">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className={`text-customWhiteText ${
                    pathname === "/careers" ? "text-xl" : ""
                  }`}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`text-customWhiteText ${
                    pathname === "/contact" ? "text-xl" : ""
                  }`}
                >
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="flex flex-col mt-12 text-customWhiteText bg-[#03080e] lg:hidden absolute top-4 left-0 z-50 w-full 
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
