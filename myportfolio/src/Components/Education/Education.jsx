import React from 'react';

const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl mb-8">Education</h1>

      <div className="my-8 flex flex-col justify-center lg:justify-start">
        <div className="max-w-3xl text-lg">
          {/* College Education */}
          <div className="flex justify-between gap-8 hover:scale-110 bg-gray-900 p-10 rounded-xl mb-8 w-full hover:transition ease-in-out delay-100 duration-500">
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-bold">Kongu Engineering College</h1>
              <h1 className="text-lg font-bold">Bachelor of Engineering</h1>
              <p>CSE</p>
              <p className="text-gray-400">2022 - Present</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <h1 className="text-xl md:text-lg font-bold">
                CGPA - <span className="text-[#5eead4] font-bold">8.49</span>
              </h1>
              <p className='text-gray-400'>(till 4th semester)</p>
            </div>
          </div>

          {/* School Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* HSE */}
            <div className="flex justify-between gap-8 hover:scale-110 bg-gray-900 p-10 rounded-xl w-full hover:transition ease-in-out delay-100 duration-500">
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold">Vikas Vidyalaya Matric. Hr. Sec. School</h1>
                <p>HSE</p>
                <p className="text-gray-400">2019 - 2020</p>
              </div>
              <div className="flex flex-col justify-center items-start mt-3">
                <h1 className="text-xl text-[#5eead4] font-bold">91.33%</h1>
              </div>
            </div>

            {/* SSLC */}
            <div className="flex justify-between gap-8 hover:scale-110 bg-gray-900 p-10 rounded-xl w-full hover:transition ease-in-out delay-100 duration-500">
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold">St. Joseph's<br/> Matric. Hr. Sec. School</h1>
                <p>SSLC</p>
                <p className="text-gray-400">2017 - 2018</p>
              </div>
              <div className="flex flex-col justify-center items-start mt-3">
                <h1 className="text-xl text-[#5eead4] font-bold">94.2%</h1>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Education;
