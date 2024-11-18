import React from "react";
import { Navigate } from "react-router-dom";

const Button = ({ title, onClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        class="text-black border-2 hover:bg-[#e7ab3c4a] border-black font-normal rounded-lg text-sm px-5 py-2.5 w-full focus:outline-none "
      >
        {title}
      </button>
    </>
  );
};

export default Button;
