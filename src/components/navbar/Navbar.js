import React, { useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  useEffect(() => {}, []);

  let location = useLocation();

  return (
    <nav
      className="bg-black border-gray-200 px-2 sm:px-4  dark:bg-gray-900 
border-b-4 nav-height
"
    >
      <div className="container flex flex-wrap justify-between items-center  px-7">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src={require("../../assets/logo.png")}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
        nav-elements
      "
          >
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white bold"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white bold"
                aria-current="page"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white bold"
                aria-current="page"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white bold"
                aria-current="page"
              >
                Contact
              </a>
            </li>
            <li className="login-btn px-2 py-2 rounded">
              {location.pathname === "/register" ? (
                <Link
                  to="/login"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white bold"
                  aria-current="page"
                >
                  Login{" "}
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white bold"
                  aria-current="page"
                >
                  Register{" "}
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
