import { Slide,Pulse,Fade } from 'react-swift-reveal';
import { useInView } from 'react-intersection-observer';

export const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div ref={ref}>
        <Slide key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
          <h1 className="text-center text-3xl sm:text-4xl mb-6 sm:mb-8 mt-8 sm:mt-10">Education</h1>
        </Slide>
      </div>

      <div className="my-6 sm:my-8 flex flex-col justify-center lg:justify-start w-full max-w-3xl">
        <div className="text-base sm:text-lg space-y-6 sm:space-y-8">
          <div ref={ref} className="hover:scale-105 sm:hover:scale-110 transition-transform duration-500 ease-in-out delay-100">
            <Pulse key={inView ? 'inView' : 'notInView'} duration={1000} top={true}>
              <div className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl w-full">
                <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-8">
                  <div className="flex flex-col items-start">
                    <h1 className="text-lg sm:text-xl font-bold">Kongu Engineering College</h1>
                    <h1 className="text-base sm:text-lg font-bold">Bachelor of Engineering</h1>
                    <p>CSE</p>
                    <p className="text-gray-400">2022 - Present</p>
                  </div>
                  <div className="flex sm:flex-col justify-items-start flex-row sm:justify-center sm:items-start items-center mt-2 sm:mt-4 gap-2">
                    <h1 className="text-lg sm:text-xl font-bold">
                      CGPA - <span className="text-[#5eead4] font-bold">8.49*</span>
                    </h1>
                    <p className='text-gray-400 text-sm'>(till 4th semester)</p>
                  </div>
                </div>
              </div>
            </Pulse>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div ref={ref} className="hover:scale-105 sm:hover:scale-110 transition-transform duration-500 ease-in-out delay-100">
              <Fade key={inView ? 'inView' : 'notInView'} left={true} duration={1500}>
                <div className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-8">
                    <div className="flex flex-col items-start">
                      <h1 className="text-lg sm:text-xl font-bold">Vikas Vidyalaya Matric. Hr. Sec. School</h1>
                      <p>HSE</p>
                      <p className="text-gray-400">2019 - 2020</p>
                    </div>
                    <div className="flex flex-col justify-center items-start mt-2 sm:mt-3">
                      <h1 className="text-lg sm:text-xl text-[#5eead4] font-bold">91.33%</h1>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div ref={ref} className="hover:scale-105 sm:hover:scale-110 transition-transform duration-500 ease-in-out delay-100">
              <Fade key={inView ? 'inView' : 'notInView'} right={true} duration={1500}>
                <div className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-8">
                    <div className="flex flex-col items-start">
                      <h1 className="text-lg sm:text-xl font-bold">St. Joseph's<br className="hidden sm:block"/> Matric. Hr. Sec. School</h1>
                      <p>SSLC</p>
                      <p className="text-gray-400">2017 - 2018</p>
                    </div>
                    <div className="flex flex-col justify-center items-start mt-2 sm:mt-3">
                      <h1 className="text-lg sm:text-xl text-[#5eead4] font-bold">94.2%</h1>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;