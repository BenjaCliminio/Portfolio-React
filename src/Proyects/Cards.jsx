import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Cards = (image, title, description, link ) => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' alt="/" src={{image}} />
              <h2 className='text-2xl font-bold text-center py-8'>{{title}}</h2>
              <p className='text-center text-4xl font-bold'>{{description}}</p>
              <button src={{link}} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><FaGithubSquare size={30} /></button>
          </div>
      </div>
    </div>
  );
};

export default Cards;