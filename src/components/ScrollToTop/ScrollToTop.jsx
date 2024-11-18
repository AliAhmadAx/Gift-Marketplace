import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 20px from the top of the document
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`border z-50 rounded-full w-14 h-14 flex ${
        isVisible ? "block" : "hidden"
      } items-center justify-center fixed right-5 bottom-10 bg-gray-300/30 hover:bg-gray-500/30 backdrop-blur-lg cursor-pointer`}
    >
      <AiOutlineArrowUp className="text-2xl" />
    </div>
  );
}

export default ScrollToTop;
