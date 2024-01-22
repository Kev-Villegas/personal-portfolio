import TypeScript from '../assets/typescript.webp';
import JavaScript from '../assets/javascript.webp';
import Wordpress from '../assets/wordpress.webp';
import Elementor from '../assets/elementor.webp';
import Tailwind from '../assets/tailwind.webp';
import ChakraUI from '../assets/chakraui.webp';
import ReactImg from '../assets/react.webp';
import Github from '../assets/github.webp';
import Figma from '../assets/figma.webp';
import HTML from '../assets/html.webp';
import Node from '../assets/node.webp';
import Next from '../assets/next.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Git from '../assets/git.webp';
import CSS from '../assets/css.webp';
import React from 'react';

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full  min-h-screen px-6 mx-auto bg-[#0a192f] text-gray-300'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full '>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className='text-4xl font-bold inline border-b-[3px] border-pink-600 font-lato '>
            Skills
          </p>
          <p className='py-6 text-xl font-montserrat font-medium '>
            Technologies that I usually use
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
        >
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ChakraUI} alt='Chakra icon' />
            <p className='my-4'>Chakra UI</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto rounded-sm'
              src={JavaScript}
              alt='JavaScript icon'
            />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='Reactjs icon' />
            <p className='my-4'>React.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto rounded-sm'
              src={TypeScript}
              alt='TypeScript icon'
            />
            <p className='my-4'>TypeScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='Nodejs icon' />
            <p className='my-4'>Node.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Next} alt='Nodejs icon' />
            <p className='my-4'>Next.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt='Git icon' />
            <p className='my-4'>Git</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='Git icon' />
            <p className='my-4'>GitHub</p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className='py-6 text-xl font-montserrat font-medium'>
            Tools that I usually use
          </p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Wordpress} alt='Git icon' />
              <p className='my-4'>Wordpress</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Elementor} alt='Git icon' />
              <p className='my-4'>Elementor</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Figma} alt='Git icon' />
              <p className='my-4'>Figma</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
