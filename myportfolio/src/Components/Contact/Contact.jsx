import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <div>
          <div className='flex flex-row justify-center items-center gap-12'>
          <div className='flex flex-row gap-4 hover:border-b-2 hover:border-[#5eead4]  p-2 rounded-xl text-[#5eead4] hover:text-white hover:transition ease-in-out duration-500 hover:scale-110'> 
          <div className='text-2xl'>
          <IoIosMail />
          </div>
          <div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sakthivaishnavi12@gmail.com"
          target="_blank">sakthivaishnavi12@gmail.com</a>
          </div>
          </div>

          <div className='flex flex-row gap-4 hover:border-b-2 hover:border-[#5eead4]  p-2 rounded-xl text-[#5eead4] hover:text-white hover:transition ease-in-out duration-500 hover:scale-110'> 
          <div className='text-2xl'>
          <FaWhatsapp />
          </div>
          <div>
            <a href="https://wa.me/919363440587" target="_blank" rel="noopener noreferrer">9363440587</a>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Contact