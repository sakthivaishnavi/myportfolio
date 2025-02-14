import React from 'react'
import { LiaCopyrightSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import {Spin,Pulse} from "react-swift-reveal";


const Footer = () => {
  const { ref, inView} = useInView({triggerOnce:false, threshold: 0.1});
  return (
    <div className='flex justify-center items-center bg-gray-950 mt-8 h-12 text-[#5eead4] text-sm lg:text-lg gap-2'>
      <div className='flex justify-center items-center gap-2'>
        <div className='flex flex-row items-center gap-1'>
        <h1>Copyright</h1><LiaCopyrightSolid /> 2025
        </div>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <div>
          <h1> | </h1>
        </div>
        <div>
        <h1>Made with 💙 and React</h1>
        </div>
        <div>
          <div ref={ref}>
            <Spin key={inView ? 'inView' : 'notView'} duration={2500} forever={true}>
             <FaReact className='w-5' />
            </Spin>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer