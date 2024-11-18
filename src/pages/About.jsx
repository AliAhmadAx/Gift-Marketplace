import React from "react";
import gift from "../assets/giftbox.png";
import giftYellow from "../assets/giftYellow.jpg";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="lg:mt-24">
      <Helmet>
        <title>Gift_Market Place | About</title>
      </Helmet>
      <div className="w-full h-[50vh] bg-gray-800 flex justify-center items-center text-center">
        <h1 className="font-bold text-[50px] yellow-color-text">ABOUT US</h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        {/* LHS */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-10 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-[40px] font-bold mb-2">
            Meet The Team
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            asperiores adipisci itaque facere, magnam recusandae cum, modi
            quidem sit repudiandae at aliquam earum debitis enim ex accusamus
            quaerat nulla! Quam accusamus officia pariatur unde et! Quo, in
            doloribus. Nam nihil vero nesciunt pariatur maiores voluptate velit
            enim vitae. Atque, magni.
          </p>

          <p className="pt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            asperiores adipisci itaque facere, magnam recusandae cum, modi
            quidem sit repudiandae at aliquam earum debitis enim ex accusamus
            quaerat nulla!
          </p>
        </div>

        {/* RHS */}
        <div className="w-1/2 hidden lg:flex items-center justify-center">
          <img src={gift} alt="" />
        </div>
      </div>

      <div className="w-full flex py-5 lg:py-10">
        {/* LHS */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
          <img src={giftYellow} className="w-1/2" alt="" />
        </div>

        {/* RHS */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-10 pb-10 lg:p-10 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-[40px] font-bold mb-2">
            How did it start?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            asperiores adipisci itaque facere, magnam recusandae cum, modi
            quidem sit repudiandae at aliquam earum debitis enim ex accusamus
            quaerat nulla! Quam accusamus officia pariatur unde et! Quo, in
            doloribus. Nam nihil vero nesciunt pariatur maiores voluptate velit
            enim vitae. Atque, magni.
          </p>

          <p className="pt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            asperiores adipisci itaque facere, magnam recusandae cum, modi
            quidem sit repudiandae at aliquam earum debitis enim ex accusamus
            quaerat nulla!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
