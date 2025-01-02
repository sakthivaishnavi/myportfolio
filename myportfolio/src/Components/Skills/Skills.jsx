import React from 'react';
import { RiReactjsFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5, SiMongodb, SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaPython, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { Fade } from 'react-swift-reveal';
import { useInView } from 'react-intersection-observer';


const skillStyles = ' hover:bg-[#5eead4] bg-gray-900 text-[#5eead4]  hover:text-black p-4 rounded-xl hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out';

const skills = [
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <RiJavascriptFill />, name: 'JavaScript' },
  { icon: <RiReactjsFill />, name: 'React' },
  { icon: <TbBrandReactNative />, name: 'React Native' },
  { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
  { icon: <DiNodejs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaC />, name: 'C' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaJava />, name: 'Java' },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <div>
      <div className='flex justify-center mt-16 mb-20'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
      <div ref={ref}>
      <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
      <h1 className='text-4xl mb-16 text-center'>My Skillsets</h1>
      </Fade></div>
      <div ref={ref}>
      <Fade key={inView ? 'inView' : 'notInView'} bottom={true} duration={1500} distance='50%'>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-14'>
          {skills.map((skill, index) => (
            <div key={index} className={skillStyles}>
              <h1 className='text-7xl ml-3 font-bold'>{skill.icon}</h1>
              <p className='mt-2 text-center'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      </Fade></div>
      <div className='flex justify-center mt-20 mb-20'>
        <hr className='border-[#353d3c] w-3/4' />
      </div>
    </div>
  );
}

export default Skills;
