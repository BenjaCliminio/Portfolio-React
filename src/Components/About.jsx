import React from 'react';
import Laptop from '../assets/laptop.jpg';
import { FaGithubSquare } from 'react-icons/fa';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p id='About' className='text-xl text-[#00df9a] font-bold '>About Me</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Future Fullstack</h1>
          <p>
          Hello everyone!! I am Benjamin Climiño and I am a Front-End Developer, I currently have +7 months of learning, but I am still studying to be a FullStack Developer in the future, I like to solve and take on new challenges on a daily basis
          </p>
          <button className='text-black hover:text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 sm:mr-10'><FaGithubSquare size={30} /></button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;