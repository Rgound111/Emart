import React, { useState } from 'react';
import { sale1 } from '../assests/index';
import { sale2 } from '../assests/index';
import { sale3 } from '../assests/index';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
  const [currentslide, setCurrentslide] = useState(0);

  const data = [
    'https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg',
    `${sale2}`,
    `${sale1}`,
    `${sale3}`,
  ];

  const prevSlider = () => {
    setCurrentslide(currentslide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlider = () => {
    setCurrentslide(currentslide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[90vh] relative'>
        <div
          style={{ transform: `translateX(-${currentslide * 100}vw)` }}
          className='w-[400vw] h-full flex transition-transform duration-1000'
        >
          <img
            className='w-screen h-[88vh] object-cover'
            src={data[0]}
            alt="Imageone"
            loading='priority'
          />
          <img
            className='w-screen h-[88vh] object-cover'
            src={data[1]}
            alt="Imagetwo"
          />
          <img
            className='w-screen h-[88vh] object-cover'
            src={data[2]}
            alt="Imagethree"
          />
          <img
            className='w-screen h-[88vh] object-cover'
            src={data[3]}
            alt="Imagefour"
          />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto bottom-10 md:bottom-44 flex gap-8 '>
          <div
            onClick={prevSlider}
            className='w-10 h-10 md:w-14 md:h-12 border-[1px] border-gray-600 flex justify-center items-center hover:bg-gray-600 hover:cursor-pointer hover:text-white active:bg-gray-900 duration-300'
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlider}
            className='w-10 h-10 md:w-14 md:h-12 border-[1px] border-gray-600 flex justify-center items-center hover:bg-gray-600 hover:cursor-pointer hover:text-white active:bg-gray-900 duration-300'
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
