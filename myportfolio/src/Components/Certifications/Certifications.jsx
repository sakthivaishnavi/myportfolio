import React from "react";
import { Carousel } from "flowbite-react";
import jp from "../../assets/JP_Morgan_excel.pdf";
import jp_img from "../../assets/jp.png";

const Certifications = () => {
  return (
    <div className="flex flex-col justify-center items-center content-center">
      <h1 className="text-center text-4xl mb-8">Certifications</h1>
      <div className="w-[28rem] hover:shadow-2xl hover:shadow-[#5eead4] rounded-xl relative">
        <Carousel
          className="w-full h-64"
          slideInterval={8000}
          pauseOnHover={true}
          indicators={true} // Enable indicators
        >
          {/* Slide 1 */}
          <div className="bg-gray-950 hover:bg-gray-900 rounded-xl flex flex-col justify-center items-center p-6">
            <a href={jp} className="text-center" aria-label="JP Morgan Excel Certification">
              <img
                src={jp_img}
                alt="JP Morgan Excel Certification"
                className="w-72 h-36 mb-4"
              />
              <p className="text-white text-lg">
                JP Morgan Chase & Co
                <br />
                Excel Certification
              </p>
            </a>
          </div>

          {/* Slide 2 */}
          <div className="bg-gray-950 hover:bg-gray-900 rounded-xl flex flex-col justify-center items-center p-6">
            <a href={jp} className="text-center" aria-label="JP Morgan Excel Certification">
              <img
                src={jp_img}
                alt="JP Morgan Excel Certification"
                className="w-72 h-36 mb-4"
              />
              <p className="text-white text-lg">
                JP Morgan Chase & Co
                <br />
                Excel Certification
              </p>
            </a>
          </div>
        </Carousel>

        {/* Custom Styling to Adjust Indicators */}
        <style>
          {`
          .carousel-indicators {
            position: absolute;
            bottom: -20px; /* Moves indicators below the slide */
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Certifications;
