import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Portfolio: Benjamin Climiño
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Benjamin Climiño
        </h1>
        <div className='flex justify-center items-center'>
          <Typed
          className='md:text-5xl sm:text-4xl mb-2 mt-2 text-xl font-bold md:pl-4 pl-2'
            strings={['Front-End Developer']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl mt-2 font-bold text-gray-500'>i am Front-End Developer, future FullStack</p>
        <button href='#About' className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>About Me</button>
      </div>
    </div>
  );
};

export default Hero;