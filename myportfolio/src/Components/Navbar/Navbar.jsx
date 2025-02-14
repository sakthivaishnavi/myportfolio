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
    
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  
    setIsMenuOpen(false);
  };
  

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full  bg-stone-950 z-50">
      <div className="flex items-center justify-between px-80 ">
        <div ref={ref} className="hidden lg:flex items-center gap-8 text-xl font-medium text-gray-400 cursor-pointer w-full">
          <Fade key={inView ? "inView" : "notInView"} top={true} duration={1500}>
            {["home", "about", "education", "skills", "projects","certifications", "achievements", "contact"].map((section) => (
              <a key={section} onClick={(e) => handleScroll(e, section)} className="link">{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            ))}
          </Fade>
        </div>

        <button onClick={toggleMenu} className="lg:hidden focus:outline-none z-50">
          {isMenuOpen ? (
            <span className="close-icon text-[#5eead4] text-2xl font-bold">&#10005;</span> // Close (X) icon
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
        <div className="mob-nav flex flex-col items-center absolute top-full right-0 w-full lg:hidden">
          {["home", "about", "education", "skills", "projects","certifications", "achievements", "contact"].map((section) => (
            <a key={section} onClick={(e) => handleScroll(e, section)} className="navs">{section.charAt(0).toUpperCase() + section.slice(1)}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
