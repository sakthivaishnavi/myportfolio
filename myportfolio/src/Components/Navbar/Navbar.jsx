import React, { useState } from "react";
import "./navbar.css";
import { Fade } from "react-swift-reveal";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div id="navbar" className="flex items-center justify-center pt-3 mt-4">
      <div ref={ref}>
        <Fade key={inView ? "inView" : "notInView"} top={true} duration={1500}>
          <div className="hidden lg:flex items-center justify-center gap-9 text-xl font-medium text-gray-400 cursor-pointer w-full">
            <a onClick={(e) => handleScroll(e, "home")} className="link">Home</a>
            <a onClick={(e) => handleScroll(e, "about")} className="link">About</a>
            <a onClick={(e) => handleScroll(e, "education")} className="link">Education</a>
            <a onClick={(e) => handleScroll(e, "skills")} className="link">Skills</a>
            <a onClick={(e) => handleScroll(e, "projects")} className="link">Projects</a>
            <a onClick={(e) => handleScroll(e, "achievements")} className="link">Accomplishments</a>
            <a onClick={(e) => handleScroll(e, "contact")} className="link">Contact</a>
          </div>
        </Fade>
      </div>

      {/* Burger Menu / Close Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="menu-button">
          {isMenuOpen ? (
            <span className="close-icon">&#10005;</span> // Close (X) icon
          ) : (
            <div className="burger-menu">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mob-nav grid grid-cols-1 absolute bg-gray-900 lg:hidden">
          <a onClick={(e) => handleScroll(e, "home")} className="navs">Home</a>
          <a onClick={(e) => handleScroll(e, "about")} className="navs">About</a>
          <a onClick={(e) => handleScroll(e, "education")} className="navs">Education</a>
          <a onClick={(e) => handleScroll(e, "skills")} className="navs">Skills</a>
          <a onClick={(e) => handleScroll(e, "projects")} className="navs">Projects</a>
          <a onClick={(e) => handleScroll(e, "achievements")} className="navs">Accomplishments</a>
          <a onClick={(e) => handleScroll(e, "contact")} className="navs">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
