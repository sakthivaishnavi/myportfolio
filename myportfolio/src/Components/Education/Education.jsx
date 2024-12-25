import React from 'react'

const Education = () => {
  return (
    <div>
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-center text-4xl mb-8">Education</h1>
      <div className='my-8 flex justify-center lg:justify-start'>
        <div className='text-center max-w-xl text-lg'>
          <div className='flex justify-between gap-16 border border-[#5eead4] p-10 rounded-xl mb-8 '>
            <div className='items-start flex flex-col'>
              <h1 className='text-xl font-bold'>Kongu Engineering College</h1>
              <h1 className='text-lg font-bold'>Bachelor of Engineering</h1>
              <p>CSE</p>
              <p className='text-gray-500'>2022-2026</p>
            </div>
            <div className=' flex flex-col mt-8'>
              <h1 className='text-xl font-bold'>CGPA -<span className='text-[#5eead4] font-bold'> 8.49 </span></h1>
              <p>(till 4th semester)</p>
            </div>
          </div>
          <div className='flex justify-between gap-10 border border-[#5eead4] p-10 rounded-xl mb-8'>
            <div className='items-start flex flex-col'>
              <h1 className='text-xl font-bold text-left'>Vikas Vidyalaya Matric. Hr. <br/>Sec. School</h1>
              <p>HSE</p>
              <p className='text-gray-500'>2019-2020</p>
            </div>
            <div className=' flex flex-col mt-10'>
              <h1 className='text-xl text-[#5eead4] font-bold'>91.33 % </h1>
            </div>
          </div>
          <div className='flex justify-between gap-16 border border-[#5eead4] p-10 rounded-xl mb-8'>
            <div className='items-start flex flex-col'>
              <h1 className='text-xl text-left font-bold'>St.Joseph's Matric. Hr. Sec.<br/> School</h1>
              <p>SSLC</p>
              <p className='text-gray-500'>2017-2018</p>
            </div>
            <div className=' flex flex-col mt-8'>
              <h1 className='text-xl text-[#5eead4] font-bold'> 94.6 % </h1>
            </div>
          </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Education