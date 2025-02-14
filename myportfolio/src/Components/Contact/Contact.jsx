import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-12 p-6">
      <div className="flex items-center gap-3 md:gap-4 hover:border-b-4 hover:border-[#5eead4] p-3 rounded-xl text-[#5eead4] hover:text-white transition ease-in-out duration-500 hover:scale-110">
        <div className="text-2xl md:text-3xl">
          <IoIosMail />
        </div>
        <div className="text-md md:text-lg">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sakthivaishnavi12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            sakthivaishnavi12@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4 hover:border-b-4 hover:border-[#5eead4] p-3 rounded-xl text-[#5eead4] hover:text-white transition ease-in-out duration-500 hover:scale-110">
        <div className="text-2xl md:text-3xl">
          <FaWhatsapp />
        </div>
        <div className="text-md md:text-lg">
          <a href="https://wa.me/919363440587" target="_blank" rel="noopener noreferrer">
            9363440587
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
