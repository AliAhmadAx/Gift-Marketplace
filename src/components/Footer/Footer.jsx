import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logoWhite.svg";

const Footer = () => {
  let location = useLocation();

  return (
    <>
      <footer
        className={`text-gray-400 bg-gray-900 body-font ${
          location.pathname.includes("/login") ||
          location.pathname.includes("/signup")
            ? "hidden"
            : "block"
        } `}
      >
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img src={logo} alt="" className="w-6/12 ml-10" />
            </a>
            <p className="mt-2 lg:ml-10 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"></h2>
              <nav className="list-none mb-10"></nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                GO TO:
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/about"}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/contact-us"}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/favorite-gift"}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Favorites
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/comparison-list"}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Compare
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CONTACT US
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Demo@demo.com
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    +1234567890
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">{`(01) 23456789`}</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Privacy & Terms
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/terms"}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/termsOfUse"}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Terms of Use
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={"/privacy-policy"}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2023 GiftSearch
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
