import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="lg:mt-24">
      <Helmet>
        <title>Gift_Market Place | Contact Us</title>
      </Helmet>
      <div className="w-full h-[50vh] bg-gray-800 flex justify-center items-center text-center">
        <h1 className="font-bold text-[50px] yellow-color-text">CONTACT US</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-20">
          <div className="w-11/12 lg:w-[80%] rounded-lg flex-col bg-gray-900 px-6 py-14 shadow-lg">
            <div className="mb-8 flex justify-center">
              <h1 className="text-center yellow-color-text text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                Contact Us
              </h1>
            </div>
            <form
              className="yellow-color-text"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full text-center">
                <p
                  id="error"
                  style={{ display: "none" }}
                  className="text-xs text-red-600"
                >
                  Username or Password is incorrect
                </p>
              </div>
              <div className="flex flex-col text-sm rounded-md">
                <input
                  className="mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  className="mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <input
                  className="mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  className="mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>

              <div className="yellow-color-text mt-5 flex justify-center text-sm">
                <button className=" mt-5 w-[95%] lg:w-1/2 border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300">
                  Submit
                </button>
              </div>

              <div className="mt-5 flex justify-center gap-3 "></div>
            </form>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex flex-col items-center justify-center py-20">
          <img
            className="w-10/12 rounded-lg shadow-lg shadow-gray-400/50"
            src="https://plus.unsplash.com/premium_photo-1661499752852-926e5e42e072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
