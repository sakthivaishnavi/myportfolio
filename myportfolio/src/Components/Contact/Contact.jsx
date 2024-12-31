import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='animate-fadeIn'>
        <h1 className='text-4xl text-center mb-8'>Contact</h1>
          <div className='flex flex-row justify-center items-center gap-12'>
          <div className='flex flex-row gap-4 bg-[#5eead4] p-4 rounded-xl text-black hover:transition ease-in-out delay-100 duration-500 hover:scale-110'> 
          <div className='text-2xl'>
          <IoIosMail />
          </div>
          <div>
            <a href="mailto:sakthivaishnavi12@gmail.com">sakthivaishnavi12@gmail.com</a>
          </div>
          </div>

          <div className='flex flex-row gap-4 bg-[#5eead4] p-4 rounded-xl text-black  hover:transition ease-in-out delay-100 duration-500 hover:scale-110'>
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