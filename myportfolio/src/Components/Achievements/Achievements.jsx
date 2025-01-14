import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Fade } from 'react-swift-reveal'

const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <div>
      <div className='flex justify-center mt-32 mb-20'>
        <hr className='border-[#353d3c] w-3/4'/>
      </div>
      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} top={true} duration={1000}>
      <h1 className='text-4xl text-center'>Accomplishments</h1>
      </Fade>
      </div>
      <div ref={ref}>
        <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={2000}>
        <table className='table-auto mx-auto mt-20'>
          <tbody>
            <tr className='bg-gray-950 text-[#5eead4]'>
              <td className='px-4 py-2'>30/09/2023</td>
              <td className='px-4 py-2'>1st prize in Brain Baffle, KEC</td>
            </tr>
            <tr className='bg-gray-900 text-[#5eead4]'>
              <td className='px-4 py-2'>2020</td>
              <td className='px-4 py-2'>1st prize in Mathcon, KEC</td>
            </tr>
            {/* <tr className='bg-gray-950 text-[#5eead4]'>
              <td className='border border-[#5eead4] border-dotted px-4 py-2'>30/09/2023</td>
              <td className='border border-[#5eead4] border-dotted px-4 py-2'>3rd prize in Guess the Code, KEC</td>
            </tr> */}
            <tr className='bg-gray-950 text-[#5eead4]'>
              <td className='px-4 py-2'>30/09/2023</td>
              <td className='px-4 py-2'>3rd prize in Mystery Box, KEC</td>
            </tr>
          </tbody>
        </table>
        </Fade>
      </div>
      <div className='flex justify-center mt-24 mb-20'>
        <hr className='border-[#353d3c] w-3/4'/>
      </div>

    </div>
  )
}

export default Achievements