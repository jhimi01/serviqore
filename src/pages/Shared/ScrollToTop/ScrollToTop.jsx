import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa6";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled
  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);

    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="ScrollToTopButton">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button rounded-sm hover:bg-backgroundGray hover:text-primary shadow-md bg-primary p-3 md:p-4 text-white"
        >
          <FaArrowUp className="font-bold" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
