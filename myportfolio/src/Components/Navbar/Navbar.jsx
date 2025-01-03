import React, { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import { Fade } from 'react-swift-reveal';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const hoverEffect = {
    scale: 1.2,
    color: "aqua",
    transition: { duration: 0.3 },
  };
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  

  return (
    <div id="navbar" className="flex items-center justify-center pt-3 mt-4">
       <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
      <div className="hidden lg:flex items-center justify-center gap-9 text-xl font-medium text-gray-400 cursor-pointer w-full">
        <motion.a href="#home" className="link" whileHover={hoverEffect}>Home</motion.a>
        <motion.a href="#about" className="link" whileHover={hoverEffect}>About</motion.a>
        <motion.a href="#skills" className="link" whileHover={hoverEffect}>Skills</motion.a>
        <motion.a href="#projects" className="link" whileHover={hoverEffect}>Projects</motion.a>
        <motion.a href="#achievements" className="link" whileHover={hoverEffect}>Accomplishments</motion.a>
        <motion.a href="#contact" className="link" whileHover={hoverEffect}>Contact</motion.a>
      </div>
      </Fade>
      </div>

      <div className="lg:hidden">
      <input type="checkbox" onClick={handleDropDown} id="burger-toggle" className={`${isDropDownVisible ? "hidden" : "visible mt-3"}`}/>
      <label htmlFor="burger-toggle" className="burger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      </div>
      
      {isDropDownVisible && (
        <div className="mob-nav grid grid-cols-1 absolute bg-gray-900 lg:hidden">
          <motion.a href="#home" className="navs">Home</motion.a>
          <motion.a href="#about" className="navs">About</motion.a>
          <motion.a href="#skills" className="navs">Skills</motion.a>
          <motion.a href="#projects" className="navs">Projects</motion.a>
          <motion.a href="#achievements" className="navs">Accomplishments</motion.a>
          <motion.a href="#contact" className="navs">Contact</motion.a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
