import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

//when hovering make it blur(gray) and show the name of the skill


const Skills = () => {
  return (
    <div>
       <div className='flex justify-center mt-16 mb-20'>
           <hr className='border-[#353d3c] w-3/4'/>
      </div>
      <h1 className='text-4xl mb-16 text-center'>My Skillsets</h1>
      <div>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><SiHtml5 /></h1>
            </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><RiJavascriptFill /></h1>
            </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><RiReactjsFill /></h1>
            </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><TbBrandReactNative /></h1>
              </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><RiTailwindCssFill /></h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mt-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><DiNodejs /></h1>
            </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><SiMongodb /></h1>
            </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><SiMysql /></h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mt-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'>C</h1>
            </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><FaPython /></h1>
            </div>
            <div className='border border-[#5eead4] p-4 rounded-xl'>
              <h1 className='text-xl font-bold'><FaJava /></h1>
              </div>
          </div>
          </div>
          <div className='flex justify-center mt-20 mb-20'>
           <hr className='border-[#353d3c] w-3/4'/>
      </div>
      </div>

      </div>
  )
}

export default Skills