import TypeScript from '../assets/typescript.png';
import JavaScript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import ChakraUI from '../assets/chakraui.png';
import ReactImg from '../assets/react.png';
import HTML from '../assets/html.png';
import Node from '../assets/node.png';
import Git from '../assets/git.png';
import CSS from '../assets/css.png';
import React from 'react';

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full h-calc(90vh) bg-[#0a192f] text-gray-300'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Skills
          </p>
          <p className='py-4 text-xl'>My Current Stack: </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='HTML icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ChakraUI} alt='HTML icon' />
            <p className='my-4'>Chakra UI</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto rounded-sm'
              src={JavaScript}
              alt='HTML icon'
            />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='HTML icon' />
            <p className='my-4'>React.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto rounded-sm'
              src={TypeScript}
              alt='HTML icon'
            />
            <p className='my-4'>TypeScript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='HTML icon' />
            <p className='my-4'>Node.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt='HTML icon' />
            <p className='my-4'>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
