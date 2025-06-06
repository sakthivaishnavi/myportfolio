import React from 'react';
import { RiReactjsFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5, SiMongodb, SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaPython, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { FaC } from "react-icons/fa6";
import { Fade } from 'react-swift-reveal';
import { useInView } from 'react-intersection-observer';

const skillStyles = 'hover:bg-[#5eead4] bg-gray-900 text-[#5eead4] hover:text-gray-900 p-3 sm:p-4 rounded-xl hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out';

const skills = [
  { icon: <RiReactjsFill />, name: 'React' },
  { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
  { icon: <DiNodejs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <RiJavascriptFill />, name: 'JavaScript' },
  { icon: <TbBrandReactNative />, name: 'React Native' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaC />, name: 'C' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <IoLogoFigma />, name: 'Figma' },
];

export const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className='flex justify-center mt-16 sm:mt-24 md:mt-32 mb-24 sm:mb-32 md:mb-48'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
      
      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
          <h1 className='text-3xl sm:text-4xl mb-12 sm:mb-16 text-center'>My Skillsets</h1>
        </Fade>
      </div>
      
      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} bottom={true} duration={1500} distance='20%'>
          <div className='flex flex-col items-center'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-14 max-w-6xl mx-auto'>
              {skills.map((skill, index) => (
                <div key={index} className={skillStyles}>
                  <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-6 sm:ml-3 font-bold'>{skill.icon}</h1>
                  <p className='mt-2 text-center text-sm sm:text-base'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
      
      <div className='flex justify-center mt-24 sm:mt-32 md:mt-48 mb-8 sm:mb-12 md:mb-16'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
    </div>
  );
}

export default Skills;