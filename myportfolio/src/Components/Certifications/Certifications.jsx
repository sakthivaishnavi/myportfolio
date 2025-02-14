import React from "react";
import jp from "../../assets/JP_Morgan_excel.pdf";
import ml from "../../assets/ML_intern_certificate.pdf";
import mongo from "../../assets/mongo.pdf";
import mongo_img from "../../assets/mongo_img.png";
import jp_img from "../../assets/jp.png";
import ml_img from "../../assets/ml.png";
import { useInView } from 'react-intersection-observer';
import { Fade,Slide,Pulse } from "react-swift-reveal";

const Certifications = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div ref={ref}>
      <Slide key={inView ? 'inView' : 'notInView'} top={true} duration={1500}>
      <h1 className="text-center text-4xl mb-24">Certifications & Internships</h1>
      </Slide></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-20 mr-20">
    <div ref={ref}>
    <Slide key={inView ? 'inView' : 'notInView'} left={true} duration={1500}>
  <div className="group relative rounded-lg shadow-md hover:shadow-[#5eead4] transition-shadow">
    <img src={mongo_img} alt="JP Morgan" className="h-52 mx-auto group-hover:opacity-80 rounded-xl" />
    <div className="absolute inset-0 bg-gray-950 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-center items-center">    
    <p className="text-[#5eead4] mb-2 font-bold text-lg text-center">MongoDB Associate Developer</p>
    <p className="text-[#5eead4] text-sm">Nodejs</p>
    </div>
  </div>
  </Slide>
  </div>
    <div ref={ref}>
    <Slide key={inView ? 'inView' : 'notInView'} bottom={true} duration={1500} distance="50%">
  <div className="group relative rounded-lg shadow-md hover:shadow-[#5eead4] transition-shadow">
    <img src={jp_img} alt="JP Morgan" className="h-52 mx-auto group-hover:opacity-80 rounded-xl" />
    <div className="absolute inset-0 bg-gray-950 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-center items-center">
      <p className="text-[#5eead4] mb-2 font-bold text-lg text-center">JP Morgan Chase & Co</p>
      <p className="text-[#5eead4] text-sm">Excel Certification</p>
    </div>
  </div>
  </Slide>
  </div>
  <div ref={ref}>
    <Slide key={inView ? 'inView' : 'notInView'} right={true} duration={1500}>
  <div className="group relative rounded-lg shadow-md hover:shadow-[#5eead4] transition-shadow">
    <img src={ml_img} alt="JP Morgan" className="h-52 w-72 mx-auto group-hover:opacity-80 rounded-xl" />
    <div className="absolute inset-0 bg-gray-950 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-center items-center">
      <p className="text-[#5eead4] mb-2 font-bold text-lg text-center">Generative AI consortium, SystimaNX IT Solutions</p>
      {/* <p className="text-[#5eead4] text-sm"></p> */}
    </div>
  </div>
  </Slide>
  </div>
</div>


</div>

  );
};

export default Certifications;
