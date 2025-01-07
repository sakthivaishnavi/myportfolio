import React from 'react'
import { Carousel } from "flowbite-react";
import Hi from '../../assets/Hi.gif';
import cropped from '../../assets/cropped.jpg';

const Certifications = () => {
  return (
    <div>
        <h1 className='text-center'>Certifications</h1>
        <div>
          <Carousel className='mt-20' slideInterval={5000}>
            <img src={Hi} alt="..." />
            <img src={cropped} alt="..." />
            <img src={Hi} alt="..." />
            <img src={Hi} alt="..." />
            </Carousel>
        </div>
    </div>
  )
}

export default Certifications